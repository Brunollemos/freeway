//variáveis do carro
let xCarro = 500;
let yCarro = 40;

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, 50, 40);
}

function movimentaCarro() {
  xCarro -= 1;

  if (xCarro < -50) {
    xCarro = 500;
  }
}
