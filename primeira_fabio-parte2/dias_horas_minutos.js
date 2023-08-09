import {print , input} from './io_utils.js'



function main(){
    
    const minutos = Number(input('digite um valor correspondente a um tempo em minutos: '))
    
    const dias = minutos / 1440
    
    const horas =  (minutos % 1440) / 60

    const minutos_resto = (minutos % 1440) % 60

    
    
    
    console.log(` Tal valor corresponde a: ${Math.trunc(dias)} dias`)
    console.log(`${Math.trunc(horas)} horas`)
    console.log(`${Math.trunc(minutos_resto)} minutos`)
    
    
    
    
}
main()