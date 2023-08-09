import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let frase = input('Digite uma frase :')
    let subcadeiaAntiga = input('Digite qual subcadeia quer alterar: ')
    let subcadeiaNova = input('Digite qual subcadeia quer por no lugar: ')

    let frase_alterada = substituirSubcadeia(frase, subcadeiaAntiga, subcadeiaNova)

    console.log(frase_alterada)
}
main()

function substituirSubcadeia(frase, subcadeiaAntiga, subcadeiaNova) {
    //método replace() para substituir a subcadeia antiga pela nova
    let novaFrase = frase.replace(subcadeiaAntiga, subcadeiaNova);
    
    return novaFrase;
  }
  
 
  