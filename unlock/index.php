<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>iPhone Lock Screen</title>
    <link href="../src/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../src/css/main.css" />
  </head>
  <body>
    <div class="bg">
      <div class="lockscreen">
        <i class="bi bi-lock-fill"></i>
        <div class="date" id="date"></div>
        <div class="time" id="time"></div>
        <div class="container text-center mt-5">
          <p id="message">Ingresa el código</p>
          <div class="d-flex justify-content-center">
            <div class="m-1 dot"></div>
            <div class="m-1 dot"></div>
            <div class="m-1 dot"></div>
            <div class="m-1 dot"></div>
          </div>
          <div class="container">
            <div class="row justify-content-center row-cols-3" id="keypad">
              <div class="col g-3"><button>1</button></div>
              <div class="col g-3"><button>2</button></div>
              <div class="col g-3"><button>3</button></div>
              <div class="col g-3"><button>4</button></div>
              <div class="col g-3"><button>5</button></div>
              <div class="col g-3"><button>6</button></div>
              <div class="col g-3"><button>7</button></div>
              <div class="col g-3"><button>8</button></div>
              <div class="col g-3"><button>9</button></div>
              <div class="col g-3"><button>0</button></div>
            </div>
          </div>
        </div>
        <div class="bottom-icons">
          <span class="icon" id="delete">Eliminar</span>
        </div>
        <hr />
      </div>
    </div>
    <script src="../src/js/bootstrap.bundle.min.js"></script>
    <script src="../src/js/main.js"></script>
  </body>
</html>
