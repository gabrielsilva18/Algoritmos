import prompt from "prompt-sync";
let input = prompt();

function main() {
  let vetor_A = [];
  let vetor_B = [];

  vetor_A = input("Digite os caracteres do vetor A: ").split(" ");
  vetor_B = input("Digite os caracteres do vetor B: ").split(" ");
  let vetor_C = new Set(vetor_A + vetor_B);

  console.log(vetor_C);
}
main();
