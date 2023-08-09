import {print , input} from './io_utils.js'


function main(){

    const numero = input('digite um número de 3 algarismos:')
    const n1 = Number(numero[0])
    const n2 = Number(numero[1])
    const n3 = Number(numero[2])
    
    

    print(`o inverso do número digitado é ${n3}${n2}${n1}`)//ex: se for 457 seu inverso será 754




}
main()