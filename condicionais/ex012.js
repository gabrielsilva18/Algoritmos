import {print , input} from './io_utils.js'

function main(){

var numero = input('Digite um número inteiro: ').split(' ').map(Number)

if (numero % 2 === 0 ){

    console.log(`O número ${numero} é par`)


}else {

    console.log(`O número ${numero} é ímpar`)
}


}
main()