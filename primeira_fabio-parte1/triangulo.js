import {print , input} from './io_utils.js'


function main(){

    const base = Number(input('digite um valor, correspondente a base de um triângulo '))
    const altura = Number(input('digite um valor, correspondente a altura do mesmo triângulo '))

    const area = (base * altura)/2
   
    
    print(`a area do triângulo : ${area}`)




}
main()