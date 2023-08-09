import prompt from 'prompt-sync'
let input = prompt()

function main(){

      let numero = Number(input("Digite um número inteiro: "))
      let resultado = calcularSoma(numero)


      console.log(`O valor da soma é ${resultado.toFixed(2)}.`)
      
}
main()

function calcularSoma(numero) {

    let soma = 0
    let i = 1

//while para somar cada termo da série 1/1 + 1/2 + 1/3 + ... + 1/n
    while(i <= numero) {

      soma += 1/i
      i++
    }
    return soma
  }