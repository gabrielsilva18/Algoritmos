import prompt from "prompt-sync";
let input = prompt();

function main() {
  let vetor_A = [];
  let vetor_B = [];

  vetor_A = input("Digite os caracteres do vetor A: ").split(" ");
  vetor_B = input("Digite os caracteres do vetor B: ").split(" ");
  let vetor_C = new Set([...vetor_A, ...vetor_B]);
  let vetor_D = obterIntersecao(vetor_A, vetor_B);
  let uniao = [...vetor_C];

  console.log(`União: ${[...uniao]}`);
  console.log(`Interseção: ${vetor_D}`);
}
main();

function obterIntersecao(vetor1, vetor2) {
  //se o elemento do vetor 1 estiver presente no vetor 2 também, return true.
  return vetor1.filter((elemento) => vetor2.includes(elemento));
}
