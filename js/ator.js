//variáveis do ator
let yAtor = 370;
let xAtor = 100;

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
