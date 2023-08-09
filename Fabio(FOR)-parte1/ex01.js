import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero = Number(input('Digite um número: '))
    let guarda_numeros = []


    for (let index = 0; index < numero; index++) {
        guarda_numeros[index] = index
        
    }

    console.log(guarda_numeros)
}
main()