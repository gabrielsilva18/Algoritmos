import prompt from "prompt-sync";
let input = prompt();

function main() {
  let tamanho = input("Digite o tamanho do vetor A: ");
  let vetor_A = [];

  for (let index = 0; index < tamanho; index++) {
    vetor_A[index] = input("Digite o elemento do vetor A: ");
  }

  console.log(`Vetor A: ${vetor_A}`);

  let vetor_B = vetor_A.reverse();

  console.log(`Vetor B: ${vetor_B}`);
}
main();
