const circulo = {
  raio: 0,
  centroX: 0,
  centroY: 0,
  area: function() {
    return Math.PI * Math.pow(this.raio, 2);
  },
  circunferencia: function() {
    return 2 * Math.PI * this.raio;
  },
  verificarPonto: function(x, y) {
    const distancia = Math.sqrt(Math.pow(x - this.centroX, 2) + Math.pow(y - this.centroY, 2));

    if (distancia < this.raio) {
      return "O ponto está dentro da circunferência";
    } else if (distancia == this.raio) {
      return "O ponto está na circunferência";
    } else {
      return "O ponto está fora da circunferência";
    }
  }
};

circulo.raio = parseFloat(prompt("Digite o raio do círculo:"));
circulo.centroX = parseFloat(prompt("Digite a coordenada X do centro do círculo:"));
circulo.centroY = parseFloat(prompt("Digite a coordenada Y do centro do círculo:"));

const x = parseFloat(prompt("Digite a coordenada X do ponto:"));
const y = parseFloat(prompt("Digite a coordenada Y do ponto:"));

console.log("Área do círculo:", circulo.area());
console.log("Circunferência do círculo:", circulo.circunferencia());
console.log(circulo.verificarPonto(x, y));
