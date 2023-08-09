import { input } from "./io_utils.js"

function main(){

let produto_1 = Number(input('Digite o valor do primeiro produto: '))
let produto_2 = Number(input('Digite o preço do segundo produto: '))
let produto_3 = Number(input('Digite o valor do terceiro produto: '))


if(produto_1 < produto_2 && produto_1 < produto_3){

console.log('O primeniro produto é o mais barato!')

}else if(produto_2 < produto_1 && produto_2 < produto_3){

    console.log('O segundo produto é o mais barato!')

}else if(produto_3 < produto_1 && produto_3 < produto_2){

    console.log('O terceiro produto é o mais barato!')
}




}
main()