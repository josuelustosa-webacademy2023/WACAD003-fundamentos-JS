function enviarForm() {
  var somaPerguntas = 0;

  if (
    document.querySelector('input[name="perg1"]:checked').value ===
    "Independiente"
  ) {
    somaPerguntas += 1;
  }

  if (
    document.querySelector('input[name="perg2"]:checked').value === "Penarol"
  ) {
    somaPerguntas += 1;
  }

  if (
    document.querySelector('input[name="perg3"]:checked').value ===
    "Alberto Spencer"
  ) {
    somaPerguntas += 1;
  }

  if (
    document.querySelector('input[name="perg4"]:checked').value ===
    "Gabigol e Luizao"
  ) {
    somaPerguntas += 1;
  }

  if (document.querySelector('input[name="perg5"]:checked').value === "21") {
    somaPerguntas += 1;
  }

  alert("Sua nota foi: " + somaPerguntas);
}
