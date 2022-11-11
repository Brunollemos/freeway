//variáveis do carro1
let xCarro1 = 500;
let yCarro1 = 40;
let velocidadeCarro1 = 2;

//variáveis do carro2
let xCarro2 = 500;
let yCarro2 = 95;
let velocidadeCarro2 = 2.5;

//variáveis do carro3
let xCarro3 = 500;
let yCarro3 = 150;
let velocidadeCarro3 = 3.2;

function mostraCarro() {
  image(imagemCarro1, xCarro1, yCarro1, 50, 40);
  image(imagemCarro2, xCarro2, yCarro2, 50, 40);
  image(imagemCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro() {
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

function voltaPosicaoInicial() {
  if (xCarro1 < -50) {
    xCarro1 = 500;
  }
  if (xCarro2 < -50) {
    xCarro2 = 500;
  }
  if (xCarro3 < -50) {
    xCarro3 = 500;
  }
}
