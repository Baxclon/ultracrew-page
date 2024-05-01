// Definimos una lista de códigos promocionales válidos
var codigosValidos = ["BoostGood1", "RealBoost", "OmgBoost"];

function validarCodigo() {
  var codigo = document.getElementById("promoCodeInput").value;
  // Verificamos si el código ingresado está en la lista de códigos válidos
  if (codigosValidos.includes(codigo)) {
    document.getElementById("resultado").innerText = "¡Código válido! Has obtenido un mes de Boost posting";
  } else {
    document.getElementById("resultado").innerText = "Código inválido. Inténtalo de nuevo.";
  }
}
