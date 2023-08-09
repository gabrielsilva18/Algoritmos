import {print , input} from './io_utils.js'


function main(){

    const numero = Number(input('Digite um número de 3 algarismos: '))

    const centenas = Math.trunc(numero / 100)
    const dezenas = Math.trunc((numero % 100) / 10)
    const unidades = Math.trunc((numero % 100) % 10)

    const inverso = (unidades * 100) + (dezenas * 10) + centenas

    const diferença = numero - inverso 


    print(`a diferença entre esse número e seu inverso é ${diferença} `)


}
main()