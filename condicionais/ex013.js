import{input} from './io_utils.js'

function main(){

    let numero_1 = Number(input('Digite 1 número: '))
    let numero_2 = Number(input('Digite 1 número: '))
    let numero_3= Number(input('Digite 1 número: '))
    let numero_4= Number(input('Digite 1 número: '))
    let numero_5 = Number(input('Digite 1 número: '))
    
    let maior_numero = Math.max(numero_1, numero_2, numero_3, numero_4, numero_5)

    console.log(`${maior_numero} é o maior número`)
}
main()