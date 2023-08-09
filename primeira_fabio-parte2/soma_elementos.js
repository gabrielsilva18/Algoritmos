import {print , input} from './io_utils.js'


function main(){

    const numero = input('digite um número de 4 algarismos:')
    const n1 = Number(numero[0])
    const n2 = Number(numero[1])
    const n3 = Number(numero[2])
    const n4 = Number(numero[3])
   
    const soma =  n1 + n2 + n3 + n4
   
   
   
    print(`a soma dos algarismos de ${numero} é: ${soma} `)


}
main()