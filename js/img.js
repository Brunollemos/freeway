//imagens e sons do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaColisao;
let somDoPonto;
let somDaTrilha;

function preload() {
  imagemEstrada = loadImage("img/estrada.png");
  imagemAtor = loadImage("img/ator-1.png");
  imagemCarro1 = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");
  imagemCarros = [
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
  ];
  somDaTrilha = loadSound("sounds/trilha.mp3");
  somDaColisao = loadSound("sounds/colidiu.mp3");
  somDoPonto = loadSound("sounds/pontos.wav");
}
