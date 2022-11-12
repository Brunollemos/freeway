//variáveis do carro
let xCarros = [500, 500, 500];
let yCarros = [40, 95, 150];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  for (let i = 0; i < velocidadeCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial() {
  for (let i = 0; i < xCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 500;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}
