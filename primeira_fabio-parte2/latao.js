import {print , input} from './io_utils.js'

function main(){

    let qnt_latao = Number(input('Digite a quantidade de latão que deseja obter: '))

    let qnt_cobre = qnt_latao * 0.3 
    let qtd_zinco = qnt_latao * 0.7

    console.log(`Em ${qnt_latao}Kg de latão, existe ${qnt_cobre.toFixed(2)}Kg de cobre e ${qtd_zinco.toFixed(2)}Kg de zinco`)


}
main()