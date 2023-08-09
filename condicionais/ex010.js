import{input} from './io_utils.js'


function main(){

    let dia = Number(input('DIgite um número correspondente ao dia: '))
    let mes = Number(input('DIgite um número correspondente ao mes: '))
    let ano = Number(input('DIgite um número correspondente ao ano: '))

    console.log(`Digite 1 para caso se tratar de um ano bissexto e 0 para não: `)

    let ano_bis = Number(input('Digite 1 ou 0: '))


    if(mes > 12 || mes <= 0){

        console.log(`Mês inválido`)
    }

    if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes ==12){

        if(dia > 31){

            console.log(`Data inválida`) 

        }else{

            console.log(`Data válida`)
        }

    }

    if(mes == 4 || mes == 6 || mes == 9 || mes == 11){

        if(dia > 30){

            console.log(`Data inválida`)

        }else{

            console.log(`Data válida`)
        }
    }


    if(ano_bis == 1){

        if(mes == 2 && dia > 29){

            console.log(`Data inválida`)

        }else{

            console.log(`Data válida`)
        }
    }

    if(ano_bis == 0){

        if(mes == 2 && dia > 28){

            console.log(`Data inválida`)

        }else{

            console.log(`Data válida`)
        }
    }

}
main()