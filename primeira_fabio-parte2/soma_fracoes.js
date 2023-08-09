import {input} from './io_utils.js'


function main(){

    let numerador_1 = Number(input('Digite um número correspondente ao numerador do primeiro número: '))
    let denominador_1 =  Number(input('Digite um número correspondente ao denominador do primeiro número: '))
    let numerador_2 =  Number(input('Digite um número correspondente ao numerador do segundo número: '))
    let denominador_2 = Number(input('Digite um número correspondente ao denominador do segundo número: '))
    let soma_numerador = 0
    let soma_denominador = 0
    let maior_denominador = Math.max(denominador_1, denominador_2)
    let menor_denominador = Math.min(denominador_1, denominador_2)


    while(denominador_1 == 0 || denominador_2 == 0){

        console.log('ERRO!')

        if(denominador_1 == 0){
        denominador_1 = Number(input('Digite outro número referente ao denominador do priemiro número: '))

        }else if (denominador_2 == 0){

            denominador_2 = Number(input('Digite outro número referente ao denominador do segundo número: '))
        }

    }

    if(denominador_1 == 1 || denominador_2 == 1){

        soma_numerador = (denominador_2 * numerador_1) + numerador_2
        soma_denominador = denominador_2

        console.log(`A soma das frações é: ${soma_numerador}/${soma_denominador}`)

    }else if (denominador_1 == denominador_2){

        soma_numerador = numerador_1 + numerador_2
        soma_denominador = denominador_2

        console.log(`A soma das frações é: ${soma_numerador}/${soma_denominador}`)

    }if(denominador_1 !== denominador_2 !== 1 && maior_denominador % menor_denominador == 0 ){

        if(denominador_1 > denominador_2){

            soma_denominador = denominador_1
            soma_numerador = ((denominador_1  / denominador_1) * numerador_1) + ((denominador_1 / denominador_2) * numerador_2)


        }else{

            soma_denominador = denominador_2
            soma_numerador = ((denominador_2  / denominador_1) * numerador_1) + ((denominador_2 / denominador_2) * numerador_2)

        }
       
    }if(denominador_1 !== denominador_2 !== 1 && maior_denominador % menor_denominador !== 0 ){

       soma_denominador = denominador_1 * denominador_2
       soma_numerador = ((soma_denominador / denominador_1) * numerador_1) + ((soma_denominador / denominador_2) * numerador_2)

    }
    console.log(`A soma das frações é: ${soma_numerador}/${soma_denominador}`)


}
main()