import {print , input} from './io_utils.js'


function main(){

    const temperatura_C = Number(input('digite um valor, correspondente a uma temperatura em °C:  '))
   
    const temperatura_F = (9 * temperatura_C + 160) / 5

    
    print(`A temperatura em °F é: ${temperatura_F}`)




}
main()