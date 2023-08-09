import prompt from "prompt-sync";
let input = prompt();

function main() {
  let tamanho = Number(input("Digite o tamnho do vetor: "));
  let vetor_A = [];

  for (let i = 0; i < tamanho; i++) {
    vetor_A[i] = input("Digite o elemento do vetor A: ");
  }

  for (let i = 0; i < tamanho; i++) {
    for (let j = i + 1; j < tamanho; j++) {
      if (vetor_A[i] === vetor_A[j]) {
        console.log("Há elementos iguais!");
        break;
      }
    }
  }
}
main();
