function gerarTabuada() {
  const cardTabuada = document.querySelector(".card-tabuada");
  cardTabuada.removeAttribute("hidden");

  let inputQuantTabuada = parseInt(
    document.getElementById("quant-tabuada").value
  );

  const tabuada = document.getElementById("tabuada");

  if (inputQuantTabuada > 0) {
    let tabuadaHtml = "";

    for (let u = 1; u <= inputQuantTabuada; u++) {
      tabuadaHtml += "<h2>Tabuada do " + u + "</h2>";
      tabuadaHtml += "<br/>";
      tabuadaHtml += "<ul>";

      for (let i = 1; i <= 10; i++) {
        tabuadaHtml += "<li>" + i + " x " + u + " = " + i * u + "</li>";
      }

      tabuadaHtml += "</ul>";
    }

    tabuada.innerHTML = tabuadaHtml;
  } else {
    alert("Todo número multiplicado por 0 é 0.");
    cardTabuada.setAttribute("hidden", "");
  }
}
