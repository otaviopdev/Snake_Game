const box = document.querySelector(".canvas-box");

function createTelaInicial() {
  box.innerHTML = `<div class="canvas-box--inner">
  <img src="./img/logo1.png" alt="logo">
  <button class="btn start-game">PLAY</button>
  <button class="btn top5">TOP5</button>
  <img src="./img/logo2.png" alt="logo">
  </div>`;
  document.querySelector(".start-game").addEventListener("click", () => {
    iniciar();
  });
  document.querySelector(".top5").addEventListener("click", () => {
    putCanvasOnHtml();
    fimDeJogo(true);
  });
}
