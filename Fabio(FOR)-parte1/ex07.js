import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero = Number(input('Digite um número: '))
    let soma_numeros = 0

    for (let index = 1; index < numero; index++) {
       
        soma_numeros += index
    }

    console.log(`A soma dos números de 1 até ${numero}, é: ${soma_numeros}`)
}
main()