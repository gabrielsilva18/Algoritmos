import {print , input} from './io_utils.js'



function main(){
    
    const dias = Number(input('digite um valor corresponndente a um número de dias: '))
    
    const anos = dias / 365
    
    const meses = (dias % 365) / 30
    
    const dia_tempo = (dias % 365) % 30
    
    
    
    console.log(` Tal valor corresponde a: ${Math.trunc(anos)} ano(s)`)
    console.log(`${Math.trunc(meses)} mes(es)`)
    console.log(`${Math.trunc(dia_tempo)} dia(s)`)
    
    
    
    
}
main()