import {print , input} from './io_utils.js'


function main(){

    const raio = Number(input('digite um valor, correspondente ao raio de uma circunferência '))
    const Pi = 3.14159

    const comprimento = 2 * raio * Pi
   
    
    print(`O comprimento da circunferência será: ${comprimento}`)




}
main()