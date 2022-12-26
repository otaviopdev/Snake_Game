class ObjDoJogo {
  constructor(qnt = 0, imgQnt = 1) {
    this.img = Array(imgQnt).fill(null);
    this.audio = null;
    this.x = [];
    this.y = [];
    this.qnt = qnt;
    this.invisivel = -100;
  }
  carregarImg(imgName, type) {
    this.img.forEach((_, i) => {
      this.img[+i] = new Image();
      this.img[+i].src = `./img/${imgName}${+i + 1}.${type}`;
    });
  }
}

// geral
function carregarAudio() {
  obstaculo.audio = new Audio("./audio/Roblox Death Sound.mp3");
  comida.audio = new Audio("./audio/marioMoeda.mp3");
  bgm = new Audio("./audio/Sweden.mp3");
  gameOver = new Audio("./audio/gameOver.mp3");
  wins = new Audio("./audio/marioWins.mp3");
}

function carregarImagens() {
  cobra.carregarImg("cobra", "svg");
  comida.carregarImg("comida", "svg");
  obstaculo.carregarImg("obstaculo", "svg");
}

function addNoJogo(...arrColision) {
  for (let i = 0; i < this.qnt; i++) {
    while (!this.x[i] || this.y[i] === cobra.x[0]) {
      // garantir que vai pegar todos os valores e nao vai ser na mesma linha da cobra
      while (true) {
        // evitar mesma posicao
        const r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
        const value = r * TAMANHO_PONTO;

        if (!this.x.find((a) => a === value)) {
          for (let arr of arrColision)
            if (!arr.x.find((a) => a === value)) this.x[i] = value;
        } else break;
      }
      const r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
      this.y[i] = r * TAMANHO_PONTO;
      if (this.x.length === this.qnt) break;
    }
  }
}

function objColision(...cb) {
  for (let i = 0; i < this.qnt; i++)
    if (cobra.x[0] == this.x[i] && cobra.y[0] == this.y[i]) cb[0](i);

  cb = cb.slice(1);
  cb.forEach((fn) => fn());
}

// obstaculo
function htmlVidaChange() {
  let vidaElement = document.querySelector(".vida--count");
  vidaElement.textContent = vida.toString().padStart(2, "0");
}

function aoColidirComObj(index) {
  vida--;
  htmlVidaChange();
  obstaculo.audio.play();
  obstaculo.x[index] = obstaculo.invisivel;
  if (vida === 0) {
    vida = 0;
    noJogo = false;
  }
}

// comida
function verificarQntdeComida() {
  let count = 0;
  for (let i = 0; i < comida.qnt; i++)
    if (comida.x[i] === comida.invisivel) count++;
  return count === comida.x.length;
}

function aoComerComida(index) {
  comida.audio.play();
  cobra.qnt++;
  comida.x[index] = comida.invisivel;
  comida.y[index] = comida.invisivel;
  ATRASO -= 2;
  countComidasPraVida++;

  if (countComidasPraVida === 3) {
    countComidasPraVida = 0;
    vida++;
    htmlVidaChange();
  }
  if (ATRASO >= 90) ATRASO = 50;
}

function comidaDpsDeComerTd() {
  if (verificarQntdeComida()) noJogo = false;
}

// cobra
function criarCobra() {
  const posAleatoria = Math.random() * C_LARGURA - TAMANHO_PONTO;
  const a = posAleatoria - (posAleatoria % TAMANHO_PONTO);

  for (var i = 0; i < this.qnt; i++) {
    this.x[i] = a - i * TAMANHO_PONTO;
    this.y[i] = a;
  }
}
