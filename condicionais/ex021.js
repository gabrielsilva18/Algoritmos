import{input} from './io_utils.js'


function main(){

    let numero_inteiro = Number(input('Digite a parte inteira do número: '))

    let numero_decimal = Number(input('Digite a parte decimal desse mesmo número: '))
    
    if(numero_decimal >= 0.5){

        numero_decimal = 0
        numero_inteiro = numero_inteiro + 1

        console.log(`O número arredondado é ${numero_inteiro}`)
    }

    if(numero_decimal < 0.5){

        numero_decimal = 0

        console.log(`O número arredondado é ${numero_inteiro}`)
    }


}
main()