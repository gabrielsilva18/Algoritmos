//10. Escreva os N primeiros termos da seqüência de Fibonacci (0,1,1,2,3,5,8,13,21,...). .

import prompt from "prompt-sync";
let input = prompt();

function main() {
  let tamanho_sequencia = Number(input("Digite o tamnho da sequência: "));
  let Fibonacci = [];
  Fibonacci[0] = 0;
  Fibonacci[1] = 1;

  for (let index = 2; index < tamanho_sequencia; index++) {
    Fibonacci[index] = Fibonacci[index - 2] + Fibonacci[index - 1];
  }

  console.log(Fibonacci);
}
main();
