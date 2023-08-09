import prompt from "prompt-sync";
let input = prompt();

function main() {
  let ordem = Number(input("Digite a ordem da matriz: "));
  let linha = new Array(ordem);
  let matriz = [];

  for (let i = 0; i < ordem; i++) {
    let coluna = new Array(ordem); //essa linha significa que, terei em uma matriz de ordem3, por exemplo, 3 colunas, cada loop nesse for criará uma delas;

    for (let j = 0; j < ordem; j++) {
      coluna[j] = Number(input(`Digite o elemento da posição (${i}, ${j}): `));
    }

    matriz.push(coluna);
  }

  let maior = 0;
  let menor = Infinity;
  let guarda_linha_maior = 0;
  let guarda_coluna_maior = 0;
  let guarda_coluna_menor = 0;
  let guarda_linha_menor = 0;

  for (let i = 0; i < ordem; i++) {
    for (let j = 0; j < ordem; j++) {
      if (matriz[i][j] > maior) {
        maior = matriz[i][j];
        guarda_linha_maior = i;
        guarda_coluna_maior = j;
      }

      if (matriz[i][j] < menor) {
        menor = matriz[i][j];
        guarda_linha_menor = i;
        guarda_coluna_menor = j;
      }
    }
  }

  console.table(matriz);
  console.log(
    `O maior numero está na linha ${guarda_linha_maior} e na coluna ${guarda_coluna_maior}`
  );
  console.log(
    `O menor numero está na linha ${guarda_linha_menor} e na coluna ${guarda_coluna_menor}`
  );
}
main();
