import{input} from './io_utils.js'



function main(){

    let nota_1 = Number(input('Digite a primeira nota do(a) aluna: '))
    let nota_2 = Number(input('Digite a segunda nota do(a) aluna: '))
    
    let media = (nota_1 + nota_2) / 2


    if(media >= 7 && media < 10){

        console.log('Aprovado')

    }if(media == 10){

        console.log('Aprovado com distinção')
    }else{

        console.log('Não Aprovado')
    }

}
main()