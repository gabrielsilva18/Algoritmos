import  prompt  from "prompt-sync";
let input = prompt()

function main() {

      let numero1 = Number(input("Digite o primeiro número: "))
      let numero2 = Number(input("Digite o segundo número: "))
      
      let resultado = multiplicaSemOperador(numero1, numero2)

      console.log(`O resultado da multiplicação dos dois números é: ${resultado}`)
      
}
main()

//Math.abs representa o módulo de um número, desconsidera o sinal de negativo
function multiplicaSemOperador(num1, num2) {
    let resultado = 0
    let contador = 0
  
    while (contador < Math.abs(num2)) { //A multiplicação propriamente dita
      resultado += Math.abs(num1)
      contador++
    }
  
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) { // para caso da multiplicação por números negativos
      resultado = -resultado
    }
  
    return resultado
  }