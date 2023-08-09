import {input} from './io_utils.js'

function main(){

let Dia_semana = Number(input('Digite um número correspondente a um dia na semana: '))

if(Dia_semana == 1){

    console.log('Domingo!')

}else if(Dia_semana == 2){

    console.log('Segunda!')

}else if(Dia_semana == 3){

    console.log('Terça!')

}else if(Dia_semana == 4){

    console.log('Quarta!')

}else if(Dia_semana == 5){

    console.log('Quinta!')

}else if(Dia_semana == 6){

    console.log('Sexta!')

}else if(Dia_semana == 7){

    console.log('Sabádo!')

}else{

    console.log('VALOR INVÁLIDO!')
}

}
main()