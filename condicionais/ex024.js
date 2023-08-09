import {input} from './io_utils.js'

function main(){

    let coeficiente_A = Number(input('Digite um valor correspondente ao coeficiente A: '))
    let coeficiente_B = Number(input('Digite um valor correspondente ao coeficiente B: '))
    let coeficiente_C = Number(input('Digite um valor correspondente ao coeficiente C: '))


    let discriminante = (coeficiente_B * coeficiente_B) - 4 * coeficiente_A * coeficiente_C
    
    let auxilia_x_1 = (coeficiente_B * -1) + discriminante
    let auxilia_x_2 = (coeficiente_B * -1) - discriminante
    let x_1 = auxilia_x_1 / (coeficiente_A * 2)
    let x_2 =  auxilia_x_2 /  (coeficiente_A * 2)


    if( discriminante < 0){

        console.log('Para a expressão não existem raízes reais!')
    }

    if(discriminante == 0){

        console.log(`A expressão possui 2 raízes iguais, que tem o valor de ${x_1}`)
    }

    if(discriminante > 0){

        console.log(`A expressão possui 2 raízes reais e distintas sendo elas ${x_1} e ${x_2}`)
    }



}
main()