import {print , input} from './io_utils.js'


function main(){

    const numero = input('digite um número de 3 algarismos:')
    const n1 = Number(numero[0])
    const n2 = Number(numero[1])
    const n3 = Number(numero[2]) // as chaves servem para indicar a posição dos algarismos
    const soma =  n1 + n2 + n3 //onde a soma representa a soma dos 3 algarismos do número

    print(`a soma dos algarismos de ${numero} é: ${soma} `)


}
main()