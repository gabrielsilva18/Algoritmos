import {print , input} from './io_utils.js'


function main(){

    const nota = Number(input('Digite os pontos adquiridos na primeira nota: '))
    const nota1 = Number(input('Digite os pontos adquiridos na segunda nota: '))
    const nota2 = Number(input('Digite os pontos adquiridos na terceira nota: '))

    const peso = Number(input('Digite o peso correspondente a primeira nota: '))
    const peso1 = Number(input('Digite o peso correspondente a segunda nota: '))
    const peso2 = Number(input('Digite o peso correspondente a terceira nota: '))

    const media_ponderada = ((nota * peso) + (nota1 * peso1) + (nota2 * peso2)) / peso + peso1 + peso2


    
   
   
    
    print(`A média podenrada dos valores é correspondenete a: ${media_ponderada}`)




}
main()