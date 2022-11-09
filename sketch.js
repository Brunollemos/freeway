let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

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
  image(imagemDoAtor, 100, 370, 30, 25);
  image(imagemCarro, 420, 40, 50, 40);
}
