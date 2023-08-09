import prompt from "prompt-sync";
let input = prompt()

function main(){


    let numero = input('Digite um nnumero: ')
    let tamanho = numero.length

    console.log(`O número tem ${tamanho} digitos`)

}
main()