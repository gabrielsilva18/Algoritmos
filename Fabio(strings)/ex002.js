import prompt  from "prompt-sync";
let input = prompt()


function main(){

    let frase = input('Digite uma frase: ')
    let palavras = frase.split(' ')
      
     for (let palavra of palavras) {

          console.log(palavra)
        }
      
}
main()