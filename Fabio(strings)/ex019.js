import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let numeroBinario = "1010"
    let numeroDecimal = binarioParaDecimal(numeroBinario)
    console.log(numeroDecimal)
    
}
main()

function binarioParaDecimal(binario) {
    let decimal = parseInt(binario, 2)
    return decimal

  }
  
  
  