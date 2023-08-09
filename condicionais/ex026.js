import{input} from './io_utils.js'

function main(){

let lado_1 = Number(input('Digite um valor correspondente a um lado do triângulo: '))
let lado_2 = Number(input('Digite um valor correspondente a um lado do triângulo: '))
let lado_3 = Number(input('Digite um valor correspondente a um lado do triângulo: '))

let maior_lado = Math.max(lado_1, lado_2, lado_3)

if(maior_lado == lado_1){

    console.log(`O primeiro lado é a hipotenusa e os outros dois são catetos!`)

}if(maior_lado == lado_2){

    console.log(`O segundo lado é a hipotenusa, e os outros dois são catetos!`)

}if(maior_lado == lado_3){

    console.log(`O terceiro lado é a hipotenusa e os outros dois são catetos!`)
}



}
main()