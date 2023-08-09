import {input} from './io_utils.js'

function main(){

let number = Number(input('Digite um número entre 0 e 100: '))
let divisor = 1
let guarda_divisor = ' '


/*while(number <= 0 || number >= 100){ //verificando a válidade do número

console.log("EROO! DIGITE NOVAMENTE")

number = Number(input('Digite um número entre 0 e 100: '))*/

if(number > divisor){

    while(number % divisor == 0){
   
        guarda_divisor += divisor
        divisor++

     }



   
   if(guarda_divisor.length > 2){
   
       console.log(`${number}  não é primo`)
   }
   
   else{

    console.log(`${number} é primo`)
   }
}







}
main()