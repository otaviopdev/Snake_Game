function ajustarPosicaoDaCobra(a, b) {
  cobra.x[0] = a;
  cobra.y[0] = b;
}

function verificarColisao() {
  for (var z = cobra.qnt; z > 0; z--)
    if (z > 4 && cobra.x[0] == cobra.x[z] && cobra.y[0] == cobra.y[z])
      noJogo = false;

  // baixo
  if (cobra.y[0] >= C_ALTURA) ajustarPosicaoDaCobra(cobra.x[0], 0);

  // cima
  if (cobra.y[0] < 0) ajustarPosicaoDaCobra(cobra.x[0], C_ALTURA);

  // direita
  if (cobra.x[0] >= C_LARGURA) ajustarPosicaoDaCobra(0, cobra.y[0]);

  // esquerda
  if (cobra.x[0] < 0) ajustarPosicaoDaCobra(C_LARGURA, cobra.y[0]);

  obstaculo.objColision(aoColidirComObj);
  comida.objColision(aoComerComida, comidaDpsDeComerTd);
}

function mover() {
  for (var z = cobra.qnt; z > 0; z--) {
    cobra.x[z] = cobra.x[z - 1];
    cobra.y[z] = cobra.y[z - 1];
  }

  if (paraEsquerda) cobra.x[0] -= TAMANHO_PONTO;

  if (paraDireita) cobra.x[0] += TAMANHO_PONTO;

  if (paraCima) cobra.y[0] -= TAMANHO_PONTO;

  if (paraBaixo) cobra.y[0] += TAMANHO_PONTO;
}

function verificarTecla(e) {
  var tecla = e.keyCode;

  if (tecla == TECLA_ESQUERDA && !paraDireita) {
    paraEsquerda = true;
    paraCima = false;
    paraBaixo = false;
  }

  if (tecla == TECLA_DIREITA && !paraEsquerda) {
    paraDireita = true;
    paraCima = false;
    paraBaixo = false;
  }

  if (tecla == TECLA_ACIMA && !paraBaixo) {
    paraCima = true;
    paraDireita = false;
    paraEsquerda = false;
  }

  if (tecla == TECLA_ABAIXO && !paraCima) {
    paraBaixo = true;
    paraDireita = false;
    paraEsquerda = false;
  }
}
