//variáveis do carro
let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro
    );
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
