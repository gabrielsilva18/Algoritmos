import prompt from "prompt-sync";
let input = prompt();

function main() {
  let ordem = Number(input("Digite a ordem da matriz: "));
  let linha = new Array(ordem);
  let matriz = [];

  for (let i = 0; i < ordem; i++) {
    let coluna = new Array(ordem);

    for (let j = 0; j < ordem; j++) {
      coluna[j] = Number(input(`Digite o elemento da posição (${i}, ${j}): `));
    }

    matriz.push(coluna);
  }

  let somaDiagonalPrincipal = 0;
  let somaDiagonalSecundaria = 0;
  let somaOutrosElementos = 0;

  // Calculando as somas
  for (let i = 0; i < ordem; i++) {
    for (let j = 0; j < ordem; j++) {
      if (i === j) {
        // Diagonal principal
        somaDiagonalPrincipal += matriz[i][j];
      } else if (i === ordem - 1 - j) {
        // Diagonal secundária
        somaDiagonalSecundaria += matriz[i][j];
      } else {
        // Outros elementos
        somaOutrosElementos += matriz[i][j];
      }
    }
  }

  console.table(matriz);
  console.log(
    `Soma dos elementos da diagonal principal: ${somaDiagonalPrincipal}`
  );
  console.log(
    `Soma dos elementos da diagonal secundária: ${somaDiagonalSecundaria}`
  );
  console.log(`Soma dos elementos fora das diagonais: ${somaOutrosElementos}`);
}

main();
