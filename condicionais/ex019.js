import {input} from './io_utils.js'

function main(){

    let peso = Number(input('Digite um valor correspondente ao peso em Kg: ')) 
    let altura = Number(input('Digite um valor correspondente a altura em metros e centímetros: '))

    let IMC = peso / (altura * altura)

    if(IMC < 25){

        console.log('O IMC indica que o peso está normal')
    }

    if(30 >= IMC >= 25 ){

        console.log('O IMC indiuca a situação de acima do peso')
    }

   if(IMC > 30){

        console.log('O IMC indica Obesidade Mórbida, tenha cuidado!')
    }

    console.log(`${IMC}`)
}
main()