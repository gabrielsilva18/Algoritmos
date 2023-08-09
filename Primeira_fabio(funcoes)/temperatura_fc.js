import prompt from "prompt-sync"
let input = prompt()


function main(){

    const temperatura_F = Number(input('digite um valor, correspondente a uma temperatura em °F:  '))
   
    calcula_graus_C(temperatura_F)

}
main()

function calcula_graus_C(temperatura_F){

    const temperatura_C = (5 * temperatura_F - 160) / 9

    console.log(`A temperatura em °C é: ${temperatura_C}`)


}