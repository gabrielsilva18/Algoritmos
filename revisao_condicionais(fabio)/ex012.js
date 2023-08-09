import {input} from './io_utils.js'

function main(){

let numero = Number(input('Digite um número: '))

if(Number.isInteger(numero)){ //função usada para identificar um número inteiro!

    console.log('È inteiro')

}else{

    console.log('È decimal')
}
}
main()