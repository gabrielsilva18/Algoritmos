import prompt  from "prompt-sync";
let input = prompt()


function main(){

    let frase = input('Digite uma frase: ')
    let frase_duplicada = ''

    for (let letra of frase) {
        
        frase_duplicada += letra
        frase_duplicada += letra
    }

    console.log(frase_duplicada)
}
main()