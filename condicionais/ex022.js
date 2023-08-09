import {input} from './io_utils.js'

function main(){

    let hora_começo = Number(input('Digite a hora em que o jogo começou: '))
    let minuto_começo = Number(input('Digite os minutos em que o jogo começou: '))

    let hora_fim = Number(input('Digite a hora de fim do jogo: '))
    let minuto_fim = Number(input('Digite os minutos de fim de jogo: '))

    let hora_total = 0
    let minuto_total = 0

    if(minuto_começo < minuto_fim){ // ve se esta correto a logica
        hora_começo = hora_começo - 1
        minuto_começo = minuto_começo + 60  

        hora_total = hora_fim - hora_começo
        minuto_total = (minuto_fim - minuto_começo) * -1  //para o valor em minutos não dar negativo

        console.log(`O tempo total de jogo é: ${hora_total} horas e ${minuto_total} minutos`)

    } if(minuto_começo == minuto_fim){

        hora_total = hora_fim - hora_começo
        minuto_total = minuto_fim - minuto_começo

        console.log(`O tempo total de jogo é: ${hora_total} horas e ${minuto_total} minutos`)
    }


    else{ 
        hora_fim = hora_fim - 1
        minuto_fim = minuto_fim + 60

        hora_total = hora_começo - hora_fim
        minuto_total = (minuto_começo - minuto_fim) * -1

        console.log(`O tempo total de jogo é: ${hora_total} horas e ${minuto_total} minutos`)
    }

}
main()