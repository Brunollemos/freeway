let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//variáveis do carro
let xCarro = 500;

//variáveis do ator
let yAtor = 370;

function preload() {
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/ator-1.png");
  imagemCarro = loadImage("img/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  console.log(xCarro);
}

function mostraAtor() {
  image(imagemDoAtor, 100, yAtor, 30, 25);
}

function mostraCarro() {
  image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro() {
  xCarro -= 1;
  /*while (xCarro > 0) {
    xCarro = 500;
  }*/

  if (xCarro < -50) {
    xCarro = 500;
  }
}

function movimentaAtor() {
  if (keyIsDown(87) && yAtor > 7) {
    yAtor -= 3;
  }
  if (keyIsDown(83) && yAtor < 370) {
    yAtor += 3;
  }
}
