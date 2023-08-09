import prompt from "prompt-sync";
let input = prompt();

function main() {
  let vetor_A = input("Digite os 20 elementos do vetor: ").split(" ");
  vetor_A = vetor_A.map(Number);
  let i = 0;
  let j = 20;
  let S = 0;

  while (j - i > 1) {
    S += (vetor_A[i] - vetor_A[j]) ** 2;

    i++;
    j--;
  }

  console.log(`O valor de S é de ${S}`);
}
main();
