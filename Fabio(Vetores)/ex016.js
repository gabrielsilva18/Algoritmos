import prompt from "prompt-sync";
let input = prompt();

function main() {
  let ordem = Number(input("Digite a ordem da matriz: "));
  let linha = new Array(ordem);
  let matriz_identidade = [];

  for (let i = 0; i < ordem; i++) {
    let coluna = new Array(ordem);

    for (let j = 0; j < ordem; j++) {
      if (j == i) {
        coluna[j] = 1;
      } else {
        coluna[j] = 0;
      }
    }

    matriz_identidade.push(coluna);
  }

  console.table(matriz_identidade);
}
main();
