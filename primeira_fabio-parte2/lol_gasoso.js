import { input } from "./io_utils.js"

function main(){

    let tempo_uso = Number(input('Digite o tem em anos que você fuma: '))
    let numero_cigarros_dia = Number(input('Digite o número de cigarros fumados diariamente: '))
    let preco_cartela = Number(input('Quanto custa uma cartela de cigarro: '))

    let qnt_cigarros = (numero_cigarros_dia * 365) * tempo_uso
    let gasto = (qnt_cigarros * preco_cartela) / 20 // por uqe cada cartela tem 20 cigarros 

    console.log(`O dinheiro gasto pelo fumante em cigarros é de: ${gasto}`)


}
main()