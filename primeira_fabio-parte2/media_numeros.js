import {print , input} from './io_utils.js'


function main(){

    const numero = input('digite um número de 3 algarismos:')
    const n1 = Number(numero[0])
    const n2 = Number(numero[1])
    const n3 = Number(numero[2]) 

    const media = (n1 + n2 + n3) / 3

    print (`O valor da media dos números é ${media}`)




}
main()