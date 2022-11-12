//variáveis do ator
let yAtor = 370;
let xAtor = 100;
let colisao = false;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 25);
}

function movimentaAtor() {
  if (keyIsDown(87) && yAtor > 7) {
    yAtor -= 3;
  }
  if (keyIsDown(83) && yAtor < 370) {
    yAtor += 3;
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
      colidiu();
    }
  }
}

function colidiu() {
  yAtor = 366;
}
