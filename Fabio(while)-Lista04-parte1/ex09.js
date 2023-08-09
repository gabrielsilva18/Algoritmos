import prompt from "prompt-sync";
let input = prompt();

function main() {
  let prova = -1
  let nadadores = -1
  let pontosClubeA = 0
  let pontosClubeB = 0

  while (prova !== 0 || nadadores !== 0) {
    prova = Number(input("Digite o número da prova (ou 0 para sair): "))
    nadadores = Number(input("Digite a quantidade de nadadores: "))

    if (prova === 0 && nadadores === 0) {
      break
    }

    let i = 1
    while(i <= nadadores) {
      let nome = input(`Digite o nome do nadador ${i}: `)
      let classificacao = Number(input(`Digite a classificação do nadador ${i}: `))
      let tempo = Number(input(`Digite o tempo do nadador ${i}: `))
      let clube = input(`Digite o clube do nadador ${i} (a ou b): `)

      if (clube === "a") {
        pontosClubeA += calcularPontos(classificacao)
      } else if (clube === "b") {
        pontosClubeB += calcularPontos(classificacao)
      }
      i++
    }
  }

  console.log("Total de pontos do clube A:", pontosClubeA)
  console.log("Total de pontos do clube B:", pontosClubeB)

  if (pontosClubeA > pontosClubeB) {
    console.log("O clube A venceu!")
  } else if (pontosClubeB > pontosClubeA) {
    console.log("O clube B venceu!")
  } else {
    console.log("Empate!")
  }
}

function calcularPontos(classificacao) {
  switch (classificacao) {
    case 1:
      return 9
    case 2:
      return 6
    case 3:
      return 4
    case 4:
      return 3
    default:
      return 0
  }
}

main();
