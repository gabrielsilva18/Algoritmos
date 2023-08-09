import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero_1 = Number(input('Digite um número: '))
    let numero_2 = Number(input('Digite o segundo número: '))
    let calculo_mdc = calcular_MDC(numero_1, numero_2)

    console.log(`O calculo do mdc é ${calculo_mdc}`)
}
main()

function calcular_MDC(numero_1, numero_2){

    let menor = Math.min(numero_1, numero_2)
    let divisor = 1
    let mdc = 0

    while(divisor <= menor){

        if(numero_1 % divisor == 0 && numero_2 % divisor == 0){

            mdc = divisor
        }

        divisor++
    }

    return mdc
}