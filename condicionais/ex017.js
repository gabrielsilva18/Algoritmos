import {input} from './io_utils.js'

function main(){

    let num_1 = Number(input('Digite um número: ')) 
    let num_2 = Number(input('Digite um segundo número: '))
    let soma = num_1 + num_2
    let resto = num_1 % num_2
    let soma_multiplicado_pelo_primeiro = soma * num_1
    let soma_dividida_pelo_segundo = soma / num_2
    let quadrado_primeiro = num_1 * num_1
    let quadrado_segundo = num_2 * num_2

    if(num_1 % num_2 == 1){

        console.log(`A soma dos números é ${soma} e o resto da divisão deles é ${resto}`)
    }
    while(num_1 % num_2 == 2 && num_1 > num_2){

        if(num_1 % 2 == 0){

            console.log(`O primeiro número é par`)
        }else{

            console.log(`O primeiro número é ímpar`)
        }

        if(num_2 % 2 == 0){

            console.log(`O Segundo número é par`)
        }else{

            console.log(`O segundo número é ímpar`)
        }

    }

    if(num_1 % num_2 == 3){

        console.log(`A multiplicação da soma pelo primeiro número é igual a: ${soma_multiplicado_pelo_primeiro}`)
    }

    if(num_1 % num_2 == 4 && num_2 != 0){

        console.log(`A divisão da soma pelo segundo número é igual a: ${soma_dividida_pelo_segundo}`)

    }if(num_1 % num_2 >= 5 || num_1 < num_2){

        console.log(`O Quadrado do primeiro número é ${quadrado_primeiro}
        e o quadrado do segundo é ${quadrado_segundo}`)
    }
}
main()