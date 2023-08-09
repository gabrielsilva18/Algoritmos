import prompt from "prompt-sync"
let input = prompt()


function main(){

    const numero = input('digite um número:')
    const numero_2 = input('digite um outro número:')

   
    ordem_inversa(numero, numero_2)

}
main()

function ordem_inversa(numero, numero_2){

    console.log(`a ordem inversa dos números digitados é ${numero_2} ; ${numero}`)//assim a ordem vai de (A,B) para (B,A)
}