import { input } from "./io_utils.js"

function main(){

    let valor_solicitado = Number(input('Digite o valor do saque: '))
    
    let notas_100 = Math.trunc(valor_solicitado / 100)
    let notas_50 = Math.trunc((valor_solicitado % 100) / 50)
    let notas_20 = Math.trunc(((valor_solicitado% 100) % 50) / 20)
    let notas_10 = Math.trunc((((valor_solicitado % 100) % 50) % 20) / 10)
    let notas_5 = Math.trunc(((((valor_solicitado % 100) % 50) % 20) % 10) / 5)
    let notas_2 = Math.trunc((((((valor_solicitado % 100) % 50) % 20) % 10) % 5) / 2)

    console.log(`${notas_100} Notas de R$100.00`)
    console.log(`${notas_50} Notas de R$50.00`)
    console.log(`${notas_20} Notas de R$20.00`)
    console.log(`${notas_10} Notas de R$10.00`)
    console.log(`${notas_5} Notas de R$5.00`)
    console.log(`${notas_2} Notas de R$2.00`)

    



}
main()