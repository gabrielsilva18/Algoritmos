import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let palavra = input('Digite uma palavra:').toUpperCase()
    let ehPalindromo = verificarPalindromo(palavra)
  
    if (ehPalindromo) {
        console.log('A palavra é palíndroma.')
     } else {
        console.log('A palavra não é palíndroma.')
    }

}
main()

function verificarPalindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('')
    return palavra === palavraInvertida
  }
  
  