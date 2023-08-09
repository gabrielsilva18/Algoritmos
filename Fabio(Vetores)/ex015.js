import prompt from "prompt-sync";
let input = prompt();

function main() {
  let ordem = Number(input("Digite a ordem da matriz: "));
  let linha = new Array(ordem);
  let matriz = [];

  for (let i = 0; i < ordem; i++) {
    let coluna = new Array(ordem);

    for (let j = 0; j < ordem; j++) {
      coluna[j] = Number(input(`Digite o elemento da posição (${i}, ${j}): `));
    }

    matriz.push(coluna);
  }

  let simetrica = verificarSimetria(matriz);

  console.table(matriz);
  if (simetrica) {
    console.log("A matriz é simétrica.");
  } else {
    console.log("A matriz não é simétrica.");
  }
}

function verificarSimetria(matriz) {
  let ordem = matriz.length;

  for (let i = 0; i < ordem; i++) {
    for (let j = 0; j < i; j++) {
      if (matriz[i][j] !== matriz[j][i]) {
        return false; // Encontrou um elemento diferente, matriz não é simétrica
      }
    }
  }

  return true; // Todos os elementos verificados são iguais, matriz é simétrica
}

main();
