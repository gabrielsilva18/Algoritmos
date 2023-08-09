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

  let soma_positivos = 0;
  let soma_negativos = 0;

  for (let i = 0; i < ordem; i++) {
    for (let j = 0; j < ordem; j++) {
      if (matriz[i][j] < 0) {
        soma_negativos += matriz[i][j];
      } else if (matriz[i][j] > 0) {
        soma_positivos += matriz[i][j];
      }
    }
  }

  console.table(matriz);
  console.log(`O somatorio de positivos é: ${soma_positivos}`);
  console.log(`O somatório de negativos é de: ${soma_negativos}`);
}
main();
