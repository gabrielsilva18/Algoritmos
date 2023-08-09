import {print , input} from './io_utils.js'


function main(){

    const numero_1 = input('digite um número:')
    const numero_2 = input('digite um outro número:')
    const divisao = numero_1 / numero_2
    const resto = numero_1 % numero_2
    const divisao_1 = divisao.toFixed(0)// 0 casas após a vírgula
    
    

    print(`o quociente da divisão desses dois numeros é ${divisao_1} e a mesma apresenta resto ${resto}`)





}
main()