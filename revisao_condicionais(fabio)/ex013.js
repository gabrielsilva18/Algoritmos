import {input} from './io_utils.js'

function main(){

    let pergunta_1 = input('Telefonou para a vítima? ')
    let pergunta_2 = input('Esteve no local do crime? ')
    let pergunta_3 = input('Mora perto da vítima? ')
    let pergunta_4 = input('Devia para a vítima? ')
    let pergunta_5 = input('Já trabalhou com a vítima? ')
       
    let contador = 0 

    if(pergunta_1 == 'Sim' || pergunta_1 == 'sim'){

        contador++ 

    if (pergunta_2 == 'Sim' || pergunta_2 == 'sim'){

        contador ++ 

    }if (pergunta_3 == 'Sim' || pergunta_3 == 'sim'){

        contador ++ 

    }if (pergunta_4 == 'Sim' || pergunta_4== 'sim'){

        contador ++ 

    }if (pergunta_5 == 'Sim' || pergunta_5 == 'sim'){

        contador ++ 

    }
}

    if(contador == 5){

        console.log('A pessoa é classificada como assasina!')

    if(contador == 4 || contador == 3){

        console.log('A pessoa é classificada como cúmplice!')

    }if( contador == 2){

        console.log('A pessoa é classificada como suspeita!')

    }{

        console.log('A pessoa é inocente!')

    }
}

}
main()

//interminadoooooooooo