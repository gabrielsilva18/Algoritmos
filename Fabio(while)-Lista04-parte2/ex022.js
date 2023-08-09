import  prompt  from "prompt-sync";
let input = prompt()

function main() {

      let numero1 = Number(input("Digite o primeiro número: "))
      let numero2 = Number(input("Digite o segundo número: "))
      
      calcularQuocienteEResto(numero1, numero2)

    }
    main()

    function calcularQuocienteEResto(dividendo, divisor) {
        let quociente = 0
        let resto = 0
      
        // Verifica se o divisor é zero (divisão por zero)
        if (divisor === 0) {
          console.log("Erro: divisão por zero!");
          return
        }
      
        // Calcula o quociente
        while (dividendo >= divisor) {
          dividendo -= divisor
          quociente++
        }
      
        resto = dividendo
    
        console.log(`Quociente: ${quociente}`)
        console.log(`Resto: ${resto}`)
        //return
      }