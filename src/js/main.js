/* START */
window.addEventListener("load", function () {
  const audio = document.getElementById("bg-music");
  audio.play().catch((error) => console.log("Autoplay blocked:", error));
});

function playMusic() {
  document.getElementById("bg-music").play();
  document.querySelector(".unlock").classList.toggle("d-none");
  document.getElementById("audio").classList.toggle("d-none");
}

/* UNLOCK SCREEN */
let passcode = "";
let tries = 0;
let unlockMessage = [
  "Uuuyy!! no pudiste!",
  "No te acuerdas?",
  "Vamos, intenta de nuevo!",
  "No es tan difícil!",
  "Bueno ya!! El primero de Mayo",
  "No sabes cuando es 1º de Mayo en némeros?!",
];
let hints = [
  "Te doy una pista: <strong>Nuestra primera cita</strong>",
  "Te doy otra pista: <strong>Ese dia no trabajamos</strong>",
  "Vamos, intenta de nuevo!",
  "Fué en <strong>domingo</strong>",
  "Bueno ya!! El primero de Mayo",
  "¬¬! Escribe esto pues: <strong>0105</strong>",
];
const dots = document.querySelectorAll(".dot");
document.getElementById("keypad").addEventListener("click", function (e) {
  let value = e.target.textContent;
  if (passcode.length < 6 && value !== "") {
    passcode += value;
  }
  updateDots();
});

document.getElementById("delete").addEventListener("click", function () {
  passcode = passcode.slice(0, -1);
  updateDots();
});

function updateDots() {
  dots.forEach((dot, index) => {
    dot.style.background =
      index < passcode.length ? "white" : "rgba(255, 255, 255, 0.5)";
  });
  if (passcode.length == 4) {
    if (passcode === "0105") {
      document.getElementById("message").textContent = "Yeiiii!! Te acordaste!";
      setTimeout(() => {
        document.querySelector(".unlock").classList.toggle("d-none");
        document.getElementById("search").classList.toggle("d-none");
      }, 2000);
    } else {
      tries++;
      document.getElementById("message").textContent = unlockMessage[tries - 1];
      setTimeout(() => {
        document.getElementById("message").innerHTML = hints[tries - 1];
        passcode = "";
        updateDots();
      }, 2000);
    }
  }
}

function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  document.getElementById("date").textContent = now.toLocaleDateString(
    undefined,
    { weekday: "long", month: "long", day: "numeric" }
  );
}
setInterval(updateTime, 1000);
updateTime();

/* SEAARCH */
const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const searchResults = document.getElementById("results");

document.querySelector(".submit").addEventListener("click", function (event) {
  event.preventDefault();
  if (searchInput.value === "Cuánto tiempo llevamos juntos?") {
    document.getElementById("search").classList.toggle("d-none");
    document.getElementById("timer").classList.toggle("d-none");
    document.querySelector(".hint").classList.remove("text-danger");
    document.querySelector(".hint").classList.add("text-muted");
  } else {
    document.querySelector(".hint").classList.remove("d-none");
    document.querySelector(".hint").classList.remove("text-muted");
    document.querySelector(".hint").classList.add("text-danger");
  }
});

/* TIMER */
let timer;
const compareDate = new Date(2022, 4, 1, 2, 0, 0, 0, 0); // Note: Month is 0-indexed (September is 8)

timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  const dateEntered = toDate;
  const now = new Date();
  const difference = dateEntered.getTime() - now.getTime();
  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (daysElement) daysElement.textContent = days * -1; // Use textContent for setting text
  if (hoursElement) hoursElement.textContent = hours * -1;
  if (minutesElement) minutesElement.textContent = minutes * -1;
  if (secondsElement) secondsElement.textContent = seconds * -1;
}

document.querySelector(".next").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("timer").classList.toggle("d-none");
  document.querySelector(".envelope-container").classList.toggle("d-none");
});

/* LOVE LETTER */
function toggleLetter() {
  document.querySelector(".envelope-container").classList.toggle("open");
}
