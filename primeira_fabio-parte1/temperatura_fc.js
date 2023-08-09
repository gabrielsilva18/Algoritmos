import {print , input} from './io_utils.js'


function main(){

    const temperatura_F = Number(input('digite um valor, correspondente a uma temperatura em °F:  '))
   
    const temperatura_C = (5 * temperatura_F - 160) / 9

    
    print(`A temperatura em °C é: ${temperatura_C}`)




}
main()