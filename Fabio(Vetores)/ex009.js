import prompt from "prompt-sync";
let input = prompt();

function main() {
  let tamanho = Number(input("Digite o tamanho do array: "));
  let array = [];

  for (let index = 0; index < tamanho; index++) {
    array[index] = Number(input(`Digite o ${index}º elemento do array: `));
  }

  let novo_array = ordenar_em_ordem_crescente(array);

  console.log(`O array em ordem crescente é ${novo_array}`);
}
main();

function ordenar_em_ordem_crescente(array) {
  array.sort((a, b) => a - b);

  return array;
}
