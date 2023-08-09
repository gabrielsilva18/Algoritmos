import {print , input} from './io_utils.js'



function main(){
    
    const segundos = Number(input('digite um valor correspondente a um tempo em segundos: '))
    
    const horas = segundos / 3600
    
    const minutos = (segundos % 3600) / 60
    
    const segundos_resto = (segundos % 3600) % 60
    
    console.log(` Tal valor corresponde a: ${Math.trunc(horas)} horas`)
    console.log(`${Math.trunc(minutos)} minutos`)
    console.log(`${Math.trunc(segundos_resto)} segundos`)
    
    
    
    
}
main()