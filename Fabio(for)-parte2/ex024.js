import prompt from 'prompt-sync'
let input = prompt()

function main(){

    let n = Number(input('Digite o número de habitantes: '))
    let salario = []
    let numero_filhos = 0
    let contator_salario_1000 = 0

    for (let index = 0; index < n; index++) {
        
        salario[index] = Number(input('Digite o salário: '))
        numero_filhos += Number(input('Digite o número de filhos: '))

        if(salario[index] <= 1000){

            contator_salario_1000++
        }
    }

    let percentual_salarios_1000 = (contator_salario_1000 / n) * 100
    let media_numero_filhos = numero_filhos / n
    let salario_total = calcula_media_salarios(salario)
    let media_salario = salario_total / n

    console.log(`A média de salário da população e de ${media_salario}`)
    console.log(`A média do número de filhos da população é de ${media_numero_filhos}`)
    console.log(`O percentual de pessoas com salários até 1000 R$ é de ${percentual_salarios_1000}%`)
}
main()

function calcula_media_salarios(salario){

    let guarda_salario = 0

    for (let index = 0; index < salario.length; index++) {
        
        guarda_salario += salario[index]
    }

    return guarda_salario
}