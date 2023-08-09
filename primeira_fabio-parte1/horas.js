import {input} from './io_utils.js'

function main(){

    let horas = Number(input('Digite um valor em horas: '))
    let minutos = Number(input('Digite um valor em minutos: '))

    let valor_minutos = (horas * 60) + minutos

    console.log(`Ò valor em minutos é: ${valor_minutos}`)

}
main()