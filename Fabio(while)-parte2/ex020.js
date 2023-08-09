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
    let i = 1
    
    while(i <= numero) {

      S += sinal * (1 / i)
      sinal *= -1
      i++
      
    }
    
    return S
  }