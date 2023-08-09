import prompt from "prompt-sync";
let input = prompt();

function main() {
  let tamanho = Number(input("Qual será o tamanho do vetor: "));
  let vetor = [];
  let i = 0;
  let vetor_B = [];

  while (vetor.length < tamanho) {
    vetor[i] = input(`Digite o ${i}º elemento: `);

    if (vetor[i] % 2 == 0) {
      vetor_B[i] = 0; //se for par, recebe 0
    } else {
      vetor_B[i] = 1; // se for impar recebe 1
    }

    i++;
  }

  console.log(`Vetor A: ${vetor}`);
  console.log(`Vetor_B: ${vetor_B}`);
}
main();
