let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//variáveis do carro
let xCarro = 420;

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
}

function mostraAtor() {
  image(imagemDoAtor, 100, 370, 30, 25);
}

function mostraCarro() {
  image(imagemCarro, xCarro, 40, 50, 40);
}
