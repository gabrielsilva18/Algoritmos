import { input } from "./io_utils.js"

function main(){

    let custo_fabrica = Number(input('Digite o custo de fabrica do carro: '))
    let porcent_distribuidor = custo_fabrica * 0.28
    let impostos = custo_fabrica * 0.45

    let custo_total = custo_fabrica + porcent_distribuidor + impostos

    console.log(`O custo totaal do veículo e de: ${custo_total}`)


}
main()