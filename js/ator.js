//variáveis do ator
let yAtor = 370;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 25);
}

function movimentaAtor() {
  if (keyIsDown(87) && yAtor > 7) {
    yAtor -= 3;
    console.log(yAtor);
  }
  if (keyIsDown(83) && yAtor < 370) {
    yAtor += 3;
    console.log(yAtor);
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAtorPosicaoInicial();
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function incluiPlacar() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor <= 8) {
    meusPontos += 1;
    voltaAtorPosicaoInicial();
  }
}
