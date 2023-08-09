import {input} from "./io_utils.js"

function main(){

let nota_1 = Number(input('Digite a primeira nota: '))
let nota_2 = Number(input('Digite a segunda nota: '))

let media = (nota_1 + nota_2) / 2

if(media >= 9 && media <= 10){

    console.log(`A primeira nota é ${nota_1} e a segunda é ${nota_2}`)
    console.log(`A media é ${media}`)
    console.log('Aprovado (nota-A)')

}else if(media >= 7.5 && media < 9){

    console.log(`A primeira nota é ${nota_1} e a segunda é ${nota_2}`)
    console.log(`A media é ${media}`)
    console.log('Aprovado (nota-B)')

}else if(media >= 6 && media < 7.5){

    console.log(`A primeira nota é ${nota_1} e a segunda é ${nota_2}`)
    console.log(`A media é ${media}`)
    console.log('Aprovado (nota-C)')

}else if(media >= 4 && media < 6){

    console.log(`A primeira nota é ${nota_1} e a segunda é ${nota_2}`)
    console.log(`A media é ${media}`)
    console.log('Rprovado (nota-D)')

}else if(media >= 0 && media < 4){

    console.log(`A primeira nota é ${nota_1} e a segunda é ${nota_2}`)
    console.log(`A media é ${media}`)
    console.log('Reprovado (nota-E)')
}
}
main()