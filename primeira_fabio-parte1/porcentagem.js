import {print , input} from './io_utils.js'


function main(){

    const salario = Number(input('digite um valor em reais: '))

    const salario_porcentagem = salario * 0.7
   
    
    print(`70% do valor é correspondenete a: ${salario_porcentagem}`)




}
main()