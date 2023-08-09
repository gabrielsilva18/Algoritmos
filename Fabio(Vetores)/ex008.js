import prompt from "prompt-sync";
let input = prompt();

function main() {
  let tamanho = Number(input("Qual será o tamanho do vetor: "));
  let vetor = [];
  let i = 0;
  let maior_elemento = 0;
  let menor_elemento = Infinity;
  let guarda_posicao_maior = 0;
  let guarda_posicao_menor = 0;

  while (vetor.length < tamanho) {
    vetor[i] = input(`Digite o ${i}º elemento: `);

    i++;
  }

  maior_elemento = Math.max(...vetor);
  menor_elemento = Math.min(...vetor);

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === maior_elemento) {
      guarda_posicao_maior = i;
    }
    if (vetor[i] === menor_elemento) {
      guarda_posicao_menor = i;
    }
  }

  console.log(
    `O maior elemento é: ${maior_elemento} e sua posição é ${guarda_posicao_maior}`
  );
  console.log(
    `O menor elemento é: ${menor_elemento} e sua posição é ${guarda_posicao_menor}`
  );
}
main();
