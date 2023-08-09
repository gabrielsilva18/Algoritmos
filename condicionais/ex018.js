import{input} from './io_utils.js'

function main(){

    let num_1 = Number(input('Digite um número: ')) 
    let num_2 = Number(input('Digite um segundo número: '))
    let soma = num_1 + num_2
    let subtracao = num_1 - num_2
    let multiplicacao = num_1 * num_2
    let divisao = num_1 / num_2

    console.log(`As operações relacionadas a esses números estão dispostas da 
    seguinte forma: 1-adição, 2-subtração, 3-multiplicação, 4-divisão`)

    let escolha_operacao = Number(input('Digite um número referente a escolha da operação a ser executada: '))


    if(escolha_operacao == 1){

        console.log(`A soma dos números é ${soma}`)
    }

    if(escolha_operacao == 2){

        console.log(`A diferença dos números é ${subtracao}`)
    }

    if(escolha_operacao == 3){

        console.log(`A multiplicação dos números é ${multiplicacao}`)
    }

    if(escolha_operacao == 4){

        console.log(`A divisão dos números é ${divisao}`)
    }

   
}
main()