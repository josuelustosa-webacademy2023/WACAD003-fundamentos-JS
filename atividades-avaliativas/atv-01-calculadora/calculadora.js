function calcular() {
  let valor1 = parseInt(document.getElementById("valor1").value);

  let valor2 = parseInt(document.getElementById("valor2").value);

  let resultado = valor1 + valor2;

  document.getElementById("resultado").innerHTML = `= ${resultado}`;
}

// Início: Function Expression
function soma(valor1, valor2) {
  var resultadoSomaParam = valor1 + valor2;
  return resultadoSomaParam;
}

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var valor1 = parseInt(document.getElementById("valor1").value);
  var valor2 = parseInt(document.getElementById("valor2").value);
  var resultadoSoma = soma(valor1, valor2);

  document.getElementById("resultado").innerHTML = `= ${resultadoSoma}`;
});
// Final: Function Expression  ----------------------------------------

// Início: Arrow Function
const subtracao = () => {
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);

  let resultadoSubtracao = valor1 - valor2;

  document.getElementById("operacao").innerHTML = `-`;
  document.getElementById("resultado").innerHTML = `= ${resultadoSubtracao}`;
};
// Final: Arrow Function  ----------------------------------------

function multiplicacao() {
  let valor1 = parseInt(document.getElementById("valor1").value);

  let valor2 = parseInt(document.getElementById("valor2").value);

  let resultado = valor1 * valor2;

  document.getElementById("operacao").innerHTML = `*`;
  document.getElementById("resultado").innerHTML = `= ${resultado}`;
}

function divisao() {
  let valor1 = parseInt(document.getElementById("valor1").value);

  let valor2 = parseInt(document.getElementById("valor2").value);

  let resultado = valor1 / valor2;

  document.getElementById("operacao").innerHTML = `/`;
  document.getElementById("resultado").innerHTML = `= ${resultado}`;
}
