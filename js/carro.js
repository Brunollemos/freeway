//variáveis do carro
let xCarros = [500, 500, 500];
let yCarros = [40, 95, 150];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro() {
  image(imagemCarro1, xCarros[0], yCarros[0], 50, 40);
  image(imagemCarro2, xCarros[1], yCarros[1], 50, 40);
  image(imagemCarro3, xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro() {
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicial() {
  if (xCarros[0] < -50) {
    xCarros[0] = 500;
  }
  if (xCarros[1] < -50) {
    xCarros[1] = 500;
  }
  if (xCarros[2] < -50) {
    xCarros[2] = 500;
  }
}
