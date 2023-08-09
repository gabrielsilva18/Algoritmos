import {print , input} from './io_utils.js'


function main(){

    const raio = Number(input('digite um valor, correspondente ao raio de uma esfera:  '))
    const Pi = 3.14

    const volume = ((4 * Pi) * raio * raio * raio) / 3

    
    print(`O volume da esfera será: ${volume.toFixed(2)}`)




}
main()