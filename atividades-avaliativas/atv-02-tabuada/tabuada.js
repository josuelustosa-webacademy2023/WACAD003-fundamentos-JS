function gerarTabuada() {
//   console.log('CLICOUUUUUUUU');

  let inputQuantTabuada = parseInt(
    document.getElementById('quant-tabuada').value
  );

  numerosDeMultiplicacao = [];

  for (let i = 1; i <= 10; i++) {
    numerosDeMultiplicacao.push(i);
    console.log(numerosDeMultiplicacao);
  }

  const tabuada = `
    <ul>
        ${numerosDeMultiplicacao
          .map(
            (item) =>
              `<li>${item} x ${inputQuantTabuada} = ${
                item * inputQuantTabuada
              }  </li>`
          )
          .join('')}
    </ul>
  `;

  const criarTabuada = document.querySelector('.card-tabuada');
  criarTabuada.innerHTML = tabuada;
}
