import prompt from "prompt-sync";
let input = prompt();

function main() {
  let ordem = 5;
  let linha = new Array(ordem);
  let matriz = [];
  let numero = 1;

  for (let i = 0; i < ordem; i++) {
    let coluna = new Array(ordem);

    for (let j = 0; j < ordem; j++) {
      coluna[j] = numero;
      numero++;
    }

    matriz.push(coluna);
  }

  console.table(matriz);
}
main();
