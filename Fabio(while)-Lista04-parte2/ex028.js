import  prompt  from "prompt-sync";
let input = prompt()

function main() {

   
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1 // Gera um número aleatório entre 1 e 100
        let tentativas = 0
        let numeroUsuario = 0 
      
        while (true) {
          numeroUsuario = Number(input("Digite um número: "))
          tentativas++
      
          if (numeroUsuario === numeroAleatorio) {

            console.log("Parabéns, você acertou!")
            console.log(`Número de tentativas: ${tentativas}`)
            break

          } else if (numeroUsuario < numeroAleatorio) {
            console.log("Maior")

          } else {
            console.log("Menor")
          }
        }
      


}
main()

