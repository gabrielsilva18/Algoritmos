import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero = Number(input('Digite um numero: '))

    while(numero > 1){

        numero = numero / 2
    }

    console.log(`Este e o numero depoisde sucessivas divisões ${numero.toFixed(2)}`)
}
main()