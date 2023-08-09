import prompt from "prompt-sync"
let input = prompt()


function main(){

    let A = Number(input('Digite um número: '))
    let B = Number(input('Digite um segundo número: '))
    let C = Number(input('Digite um terceiro número: '))

    calcula_expressao(A, B, C)


}
main()

function calcula_expressao(A, B, C){

    let R = (A + B) ** 2
    let S = (B + C) ** 2

    let D = R + S / 2

    console.log(`O resultado da expreassão é: ${D}`)

}