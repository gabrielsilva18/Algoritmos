import {print , input} from './io_utils.js'



function main(){
    
    const horas = Number(input('digite um valor correspondente a um tempo em horas: '))
    
    const semanas = horas / 168
    
    const dias =  (horas % 168) / 24

    const horas_resto = (horas % 168) % 24

    
    
    
    console.log(` Tal valor corresponde a: ${Math.trunc(semanas)} semanas`)
    console.log(`${Math.trunc(dias)} dias`)
    console.log(`${Math.trunc(horas_resto)} horas`)
    
    
    
    
}
main()