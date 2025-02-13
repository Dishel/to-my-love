let passcode = "";
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
      document.getElementById("message").textContent = "Te acordaste!";
      setTimeout(() => {
        
      }, 1000);
    } else {
      document.getElementById("message").textContent = "Código incorrecto!";
      setTimeout(() => {
        document.getElementById("message").textContent =
          "Una pista: Nuestra primera cita";
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
