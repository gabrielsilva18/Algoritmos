import{input} from './io_utils.js'



function main(){

    let numero_1 = Number(input('Digite 1 número: '))
    let numero_2 = Number(input('Digite 1 número: '))
    let numero_3= Number(input('Digite 1 número: '))
    let numero_4= Number(input('Digite 1 número: '))
    let numero_5 = Number(input('Digite 1 número: '))
   // let guardar_maiores = [' '] //os numeros estao saindo juntos
   
    let media_numeros = (numero_1 + numero_2 + numero_3 + numero_4 + numero_5) / 5

    
    if(numero_1 > media_numeros){

        //guardar_maiores += numero_1
        console.log(`${numero_1}`)
    }

    if(numero_2 > media_numeros){

       // guardar_maiores += numero_2
       console.log(`${numero_2}`)
    }

    if(numero_3 > media_numeros){

       // guardar_maiores += numero_3
       console.log(`${numero_3}`)
    }

    if(numero_4 > media_numeros){

       // guardar_maiores += numero_4
       console.log(`${numero_4}`)
    }

    if(numero_5 > media_numeros){

        //guardar_maiores += numero_5
        console.log(`${numero_5}`)
    }

    
}
main()