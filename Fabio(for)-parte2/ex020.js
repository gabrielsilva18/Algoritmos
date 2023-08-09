import prompt from 'prompt-sync'
let input = prompt()

function main(){
      
      let numero = Number(input("Digite um número inteiro: "))
      let resultado = calcularSoma(numero)


      console.log(`O valor de S é: ${resultado.toFixed(2)}.`)
      
}
main()

function calcularSoma(numero) {
    let S = 0
    let sinal = 1
    
    for (let i = 1; i <= numero; i++) {

      S += sinal * (1 / i)
      sinal *= -1
      
    }
    
    return S
  }