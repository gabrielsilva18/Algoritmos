import {print , input} from './io_utils.js'


function main(){

    const numero = input('digite um número de 2 algarismos:')
    const n1 = Number(numero[0])
    const n2 = Number(numero[1])
    const soma = n1 + n2
    const diferença = n1 - n2
    const divisao = soma / diferença
    

    print(`a divisão da soma pela subtração dos números será ${divisao}`)





}
main()