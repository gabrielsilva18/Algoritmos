import {input} from './io_utils.js'

function main(){

    let minutos = Number(input('Digite um valor em minutos: '))
    
    let valor_horas = Math.trunc(minutos / 60)
    let valor_minutos = minutos % 60


    console.log(`Ò valor corresponde a : ${valor_horas} horas e ${valor_minutos} minutos`)

}
main()