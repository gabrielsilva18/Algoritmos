import {input} from './io_utils.js'


function main(){

    let custo_dollar = Number(input("Digite quanto custa o dollar em reais atualmente: "))
    let valor_doll = Number(input('Digite um valor em dollar: '))

    let valor_reais = custo_dollar * valor_doll

    console.log (`O valor em reais é R$ ${valor_reais}`)



}
main()