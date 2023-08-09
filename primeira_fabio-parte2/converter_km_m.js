import {print , input} from './io_utils.js'


function main(){

    const m = Number(input('digite um valor em metros:  '))
   
    const km = Math.trunc(m / 1000)
    const resto_m = m % 1000
    
    print(`Esse valor corresponde a: ${km} quilometros e ${resto_m} metros`)




}
main()