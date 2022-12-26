function sortBest5players() {
  for (let i in players.ponto)
    for (let j = +i + 1; j < players.ponto.length; j++) {
      if (j >= players.ponto.length) break;
      if (players.ponto[j] > players.ponto[i]) {
        permuta(players.ponto, i, j);
        permuta(players.nome, i, j);
        permuta(players.time, i, j);
      }
    }
  return {
    nome: players.nome.slice(0, 5),
    ponto: players.ponto.slice(0, 5),
    time: players.time.slice(0, 5),
  };
}

function permuta(arr, indexI, indexJ) {
  let aux = arr[indexJ];
  arr[indexJ] = arr[indexI];
  arr[indexI] = aux;
}
