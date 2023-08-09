import {input} from './io_utils.js'

function main(){

let numero = Number(input('Digite um número inteiro menor que 1000: '))

let centenas = Math.trunc(numero / 100)
let dezenas = Math.trunc((numero % 100) / 10)
let unidades = Math.trunc((numero % 100) % 10)

console.log(`O número tem ${centenas} centenas`)
console.log(`${dezenas} dezenas`)
console.log(`e ${unidades} unidades`)

}
main()