import { input } from "./io_utils.js"

function main(){

    let quantidade_combustivel = Number(input('Digite a quantidade em litros de combustível: '))
    let tipo_combustivel = input(' Digite o tipo de combustível, sendo A, para álcool e G para gasolina: ')
    let desconto = 0
    let valor_final = 0 

if(tipo_combustivel == 'A' && quantidade_combustivel < 20){

    desconto = (0.03 * 1.90) * quantidade_combustivel
    valor_final = (quantidade_combustivel * 1.90) - desconto

    console.log(`O valor a ser pago e de: ${valor_final} reais`)

}else if(tipo_combustivel == 'A' && quantidade_combustivel > 20){

    desconto = (0.05 * 1.90) * quantidade_combustivel
    valor_final = (quantidade_combustivel * 1.90) - desconto

    console.log(`O valor a ser pago e de: ${valor_final} reais`)

}else if(tipo_combustivel == 'G' && quantidade_combustivel < 20){

    desconto = (0.04 * 2.50) * quantidade_combustivel
    valor_final = (quantidade_combustivel * 2.50) - desconto

    console.log(`O valor a ser pago e de: ${valor_final} reais`)

}else if(tipo_combustivel == 'G' && quantidade_combustivel > 20){

    desconto = (0.06 * 2.50) * quantidade_combustivel
    valor_final = (quantidade_combustivel * 2.50) - desconto

    console.log(`O valor a ser pago e de: ${valor_final} reais`)
}
}
main()