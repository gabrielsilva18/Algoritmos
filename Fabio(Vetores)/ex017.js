import prompt from "prompt-sync";
let input = prompt();

function main() {
  let ordem = Number(input("Digite a ordem da matriz: "));
  let linha = new Array(ordem);
  let matriz = [];

  for (let i = 0; i < ordem; i++) {
    let coluna = new Array(ordem); //essa linha significa que, terei em uma matriz de ordem3, por exemplo, 3 colunas, cada loop nesse for criará uma delas;

    for (let j = 0; j < ordem; j++) {
      coluna[j] = Number(input(`Digite o elemento da posição (${i}, ${j}): `));
    }

    matriz.push(coluna);
  }

  let soma_linha = [];

  for (let index = 0; index < ordem; index++) {
    soma_linha[index] = 0;
    for (let j = 0; j < ordem; j++) {
      soma_linha[index] += matriz[index][j];
    }
  }

  let maior = 0;
  let menor = Infinity;
  let guarda_posicao_maior = 0;
  let guarda_posicao_menor = 0;

  for (let index = 0; index < ordem; index++) {
    if (soma_linha[index] > maior) {
      maior = soma_linha[index];
      guarda_posicao_maior = index;
    }

    if (soma_linha[index] < menor) {
      menor = soma_linha[index];
      guarda_posicao_menor = index;
    }
  }

  console.table(matriz);
  console.log(`O maior somatorio está na linha ${guarda_posicao_maior}`);
  console.log(`O menor somatório está na linha ${guarda_posicao_menor}`);
}
main();
