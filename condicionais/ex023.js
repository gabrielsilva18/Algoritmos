import{input} from './io_utils.js'

function main(){

    let dia_1 = Number(input('Digite um dia : '))
    let mes_1 = Number(input('Digite um número correspondente ao mês: '))
    let ano_1 = Number(input('Digite um número correspondente ao ano: '))

    let dia_2 = Number(input('Digite um número correspondente ao dia de uma segunda data : '))
    let mes_2 = Number(input('Digite um número correspondente ao mês de uma segunda data: '))
    let ano_2 = Number(input('Digite um número correspondente ao ano de uma segunda data: '))

    
    if(ano_1 !== ano_2){

        if(ano_1 > ano_2){

            console.log("A primeira data é mais recente!")
    }
        else{

            console.log(`A segunda data é mais recente!`)

    }
}
    if(ano_1 == ano_2 && mes_1 != mes_2){

        if(mes_1 < mes_2){

            console.log('A primeira data é mais recente!')
        }

        else{

            console.log('A segunda data é mais recente!')
        }
    }

    if(ano_1 == ano_2 && mes_1 == mes_2) {

        if(dia_1 < dia_2){

            console.log('A primeira data é mais recente!')
        }

        else{

            console.log('A segunda data é mais recente!')
        }
    }
}
main()