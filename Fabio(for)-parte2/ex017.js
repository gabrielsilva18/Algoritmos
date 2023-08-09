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
//for para somar cada termo da série 1/1 + 1/2 + 1/3 + ... + 1/n
    for (let i = 1; i <= numero; i++) {

      soma += 1/i
    }
    return soma
  }