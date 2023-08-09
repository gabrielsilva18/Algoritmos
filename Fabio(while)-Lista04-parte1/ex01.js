import prompt from "prompt-sync";
let input = prompt()

function main(){

        let numero = 1
      
        while (numero !== 0) {
          numero = Number(input("Digite um número (ou 0 para sair):"))
      
          if (numero === 0) {
            break
          }
      
          let divisores = []
          let i = 1
          
      
          while(i <= numero) {

            if(numero % i === 0) {

              divisores[i - 1] = i

            }
            i++
          }

          let divisores_validos = divisores.filter(Element => Element != undefined)
      
          console.log(`Número: ${numero}`)
          console.log(`Divisores: ${divisores_validos}`)
        }
      
      
   
}
main()


