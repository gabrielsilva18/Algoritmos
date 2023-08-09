import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let nomeCompleto = input('Digite o nome completo: ')
    let nomeFormatado = formatarNome(nomeCompleto)
  
    console.log(`Nome formatado: ${nomeFormatado}`)
  

}
main()

function formatarNome(nomeCompleto) {
    // Divide o nome completo (sobrenome e nome)
   let partes = nomeCompleto.split(' ')
  
    // Inverte a ordem das partes e unir novamente
   let sobrenome = partes[partes.length -1]
   let nome = partes[0]
   let nomeFormatado = sobrenome + '/' + nome
  
    return nomeFormatado
  }
