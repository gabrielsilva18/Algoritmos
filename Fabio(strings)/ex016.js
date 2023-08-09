import prompt  from "prompt-sync"
let input = prompt()


function main(){

   escrever_na_diagonal('Gabriel')
      
}
main()

function escrever_na_diagonal(texto) {
    // Verifica se o texto ultrapassa 20 caracteres
    if (texto.length > 20) {
      console.log('O texto deve ter no máximo 20 caracteres')
      return
    }
  
    // Preenche com espaços em branco e escreve o texto na diagonal
    for (let i = 0; i < texto.length; i++) {
      // Preenche com espaços em branco antes do caractere atual
      for (let j = 0; j < i; j++) {
        process.stdout.write(' ')
      }
      // Escreve o caractere atual
      console.log(texto[i])
    }
  }
  
  
  
  