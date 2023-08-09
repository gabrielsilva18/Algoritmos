import prompt from "prompt-sync"
let input = prompt()


function main(){

    let minutos = Number(input('Digite um valor em minutos: '))
    
    transformas_minutos(minutos)

}
main()

function transformas_minutos(minutos){

    let valor_horas = Math.trunc(minutos / 60)
    let valor_minutos = minutos % 60


    console.log(`O valor corresponde a : ${valor_horas} horas e ${valor_minutos} minutos`)

}