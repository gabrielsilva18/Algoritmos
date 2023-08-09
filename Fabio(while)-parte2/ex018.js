import prompt from 'prompt-sync'
let input = prompt()

function main(){
      
      let numero = Number(input("Digite um número inteiro positivo: "))
      let resultado = calculaSoma(numero)


      console.log(`O resultado da soma é ${resultado.toFixed(2)}.`)
      
}
main()

function calculaSoma(numero) {

    let soma = 0
    let i = numero

    while(i >= 1) {

      soma += i / (numero - i + 1)
      i--

    }
    return soma
  }