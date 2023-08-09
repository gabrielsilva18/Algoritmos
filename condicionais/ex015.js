import {input} from './io_utils.js'


function main(){

    let nome_professor1 = input(' Digite o nome do primeiro professor: ')
    let horas_professor1 = Number(input(' Digite o número de horas que esse professor trabalha: '))
    let valor_hora1 = Number(input('Digite o valor que o professor ganha pela hora de trabalho: '))

    let nome_professor2 = input('Digite o nome do segundo professor: ')
    let horas_professor2 = Number(input(' Digite o número de horas que esse professor trabalha: '))
    let valor_hora2 = Number(input('Digite o valor que o professor ganha pela hora de trabalho: '))

    let salario_professor1 = horas_professor1 * valor_hora1
    let salario_professor2 = horas_professor2 * valor_hora2


    if(salario_professor1 > salario_professor2){

        console.log(`${nome_professor1} tem o maior salário total`)

    }else{

        console.log(`${nome_professor2} tem o maior salários total`)
    }







}

main()