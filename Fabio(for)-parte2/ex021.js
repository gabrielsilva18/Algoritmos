import prompt from 'prompt-sync'
let input = prompt()

function main(){


    let numero = Number(input("Digite um número inteiro: "))
    let resultado = calcularS(numero)


    console.log(`O valor de S é ${resultado.toFixed(2)}.`)

}
main()

function calcularS(numero) {

    let soma = 0
    let j = 1

    for (let i = 1; j <= numero; i = i + 2) {

      soma += i / j //ex: 99/50

      j++
    }

    return soma
  }