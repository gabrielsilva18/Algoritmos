//Leia uma matriz quadrada de ordem N, calcule e escreva sua matriz transposta..

import prompt from "prompt-sync";
let input = prompt();

function main() {
  let linhas = Number(input("Digite o número de linhas da matriz: "));
  let colunas = Number(input("Digite o número de colunas da matriz: "));
  let linha = new Array(linhas);
  let matriz = [];

  for (let i = 0; i < linhas; i++) {
    let coluna = new Array(colunas);

    for (let j = 0; j < colunas; j++) {
      coluna[j] = Number(input(`Digite o elemento da posição (${i}, ${j}): `));
    }

    matriz.push(coluna);
  }

  let matriz_transposta = [];

  for (let i = 0; i < colunas; i++) {
    let linha_transposta = new Array(colunas);

    for (let j = 0; j < linhas; j++) {
      linha_transposta[j] = matriz[j][i];
    }

    matriz_transposta.push(linha_transposta);
  }

  console.table(matriz_transposta);
  //console.log(matriz[0][1])
}
main();
