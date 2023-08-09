import {print , input} from './io_utils.js'



function main(){
    
    const meses = Number(input('digite um valor correspondente a um tempo em meses: '))
    
    const anos = meses / 12
    
    const meses_resto =  meses % 12

   
    
    
    console.log(` Tal valor corresponde a: ${Math.trunc(anos)} anos`)
    console.log(`${Math.trunc(meses_resto)} meses`)
    
    

}
main()