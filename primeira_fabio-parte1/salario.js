import {print , input} from './io_utils.js'


function main(){

    const salario = Number(input('digite um valor,correspondente ao salário: '))

    const salario_aumento = salario * 0.25
    const salario_final = salario_aumento + salario
    
    print(`O salário após o aumento é: ${salario_final}`)




}
main()