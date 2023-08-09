import {print , input} from './io_utils.js'

function main(){

 let [opcao, num1, num2, num3] = input('Digite 4 números, onde o primeiro deles pode ser somente 1, 2 ou 3: ').split(' ').map(Number)


if (opcao_1_2_3(opcao, num1, num2, num3)){

console.log(`\t> O valor dos números é válido`)

if (opcao_1(opcao, num1, num2, num3)){


console.log(`\t> O valor atribuido ao primeiro número é ${num1} `)

}else if (opcao_2(opcao, num1, num2, num3)){

console.log(`\t> O valor atribuido ao primeiro número é ${num2} `)

}else {

console.log(`\t> O valor atribuido ao primeiro número é ${num3} `) }

}else{

    console.log(`\t> O valor dos números é inválido`)

}



function opcao_1_2_3(opcao, num1, num2, num3){
    return opcao === 1 || opcao === 2 || opcao === 3
}

function opcao_1(opcao, num1, num2, num3){
    return opcao === 1
}

function opcao_2(opcao, num1, num2, num3){
    return opcao === 2
}

function opcao_3(opcao, num1, num2, num3){
    return opcao === 3
}


}
main()
