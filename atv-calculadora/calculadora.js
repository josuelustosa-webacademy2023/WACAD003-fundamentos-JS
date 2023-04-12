function calcular() {
    let valor1 = parseInt(document.getElementById("valor1").value);

    let valor2 = parseInt(document.getElementById("valor2").value);

    let resultado = valor1 + valor2;

    document.getElementById("resultado").innerHTML = `= ${resultado}`
}

function soma() {
    let valor1 = parseInt(document.getElementById("valor1").value);

    let valor2 = parseInt(document.getElementById("valor2").value);

    let resultado = valor1 + valor2;

    document.getElementById("operacao").innerHTML = `+`
    document.getElementById("resultado").innerHTML = `= ${resultado}`
}


function subtracao() {
    let valor1 = parseInt(document.getElementById("valor1").value);

    let valor2 = parseInt(document.getElementById("valor2").value);

    let resultado = valor1 - valor2;

    document.getElementById("operacao").innerHTML = `-`
    document.getElementById("resultado").innerHTML = `= ${resultado}`
}

function multiplicacao() {
    let valor1 = parseInt(document.getElementById("valor1").value);

    let valor2 = parseInt(document.getElementById("valor2").value);

    let resultado = valor1 * valor2;

    
    document.getElementById("operacao").innerHTML = `*`
    document.getElementById("resultado").innerHTML = `= ${resultado}`
}

function divisao() {
    let valor1 = parseInt(document.getElementById("valor1").value);

    let valor2 = parseInt(document.getElementById("valor2").value);

    let resultado = valor1 / valor2;

    document.getElementById("operacao").innerHTML = `/`
    document.getElementById("resultado").innerHTML = `= ${resultado}`
}
