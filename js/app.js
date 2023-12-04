let temporizadorIniciado = false;
let tiempoRestante = 0;
let temporizador = document.querySelector(".temporizador");
let inputTiempo = document.getElementById("inputTiempo");

function iniciarTiempo() {
  if (!temporizadorIniciado) {
    if (parseInt(inputTiempo.value) >= 0) {
      tiempoRestante = parseInt(inputTiempo.value);
    } else {
      tiempoRestante = 0;
    }

    temporizadorIniciado = setInterval(actualizarTemporizador, 1000);
  }
}

function pausarTemporizador() {
  clearInterval(temporizadorIniciado);
  temporizadorIniciado = false;
}

function resetearTemporizador() {
  clearInterval(temporizadorIniciado);
  temporizadorIniciado = false;
  temporizador.innerText = "00 : 00";
}

function actualizarTemporizador() {
  if (tiempoRestante <= 0) {
    clearInterval(temporizadorIniciado);
    temporizadorIniciado = null;
    return;
  }
  tiempoRestante--;
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  temporizador.textContent = `${minutos
    .toString()
    .padStart(2, "0")} : ${segundos.toString().padStart(2, "0")}`;
}
