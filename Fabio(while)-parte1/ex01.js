import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero = Number(input('Digite um número: '))
    let guarda_numeros = []
    let index = 0


    while(index < numero) {
        
        guarda_numeros[index] = index
        index++
    }

    console.log(guarda_numeros)
}
main()