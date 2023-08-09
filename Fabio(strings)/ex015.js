import prompt  from "prompt-sync"
let input = prompt()


function main(){

   escrever_na_vertical(5, 'Gabriel')
      
}
main()

function escrever_na_vertical(coluna, texto) {
    // Verifica se o texto ultrapassa 20 caracteres
    if (texto.length > 20) {
      console.log('O texto deve ter no máximo 20 caracteres')
      return
    }
  
    // Preenche com espaços em branco até a coluna indicada
    for (let i = 0; i < coluna - 1; i++) {
      console.log(' ')
    }
  
    // Escreve o texto na vertical
    for (let i = 0; i < texto.length; i++) {
      console.log(texto[i])
    }
  }