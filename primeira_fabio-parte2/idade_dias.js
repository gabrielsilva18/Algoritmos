import {print , input} from './io_utils.js'


function main(){
    
    
    const anos = Number(input('digite os anos que compõem certa idade: '))
    const meses = Number(input('digite os meses: '))
    const dias= Number(input('digite os dias: '))
    
    const anos_dias = anos * 365
    const meses_dias = meses * 30
    
    const soma = anos_dias + meses_dias + dias


    
    console.log(`A idade expressa em dias é : ${soma}`)
   
    
}
main()