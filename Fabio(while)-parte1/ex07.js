import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero = Number(input('Digite um número: '))
    let soma_numeros = 0
    let index = 1

    while(index < numero) {
       
        soma_numeros += index
        index++
    }

    console.log(`A soma dos números de 1 até ${numero}, é: ${soma_numeros}`)
}
main()