import {print , input} from './io_utils.js'

function main(){

const [n1, n2, n3] = input('Digite 3 números quaisquer: ').split(' ').map(Number)


if (n1_n2_n3(n1, n2, n3)){

console.log(` A ordem crescente dos números é: ${n1}, ${n2}, ${n3}`)

}else if (n2_n1_n3(n1, n2, n3)){

console.log(`A ordem crescente dos números é: ${n2}, ${n1}, ${n3} `)

}else if (n1_n3_n2(n1, n2, n3)){

console.log(`A ordem crescente dos números é: ${n1}, ${n3}, ${n2} `)

}else if (n3_n1_n2(n1, n2, n3)){

console.log(`A ordem crescente dos números é: ${n3}, ${n1}, ${n2} `)

}else if (n3_n2_n1(n1, n2, n3)){

    console.log(`A ordem crescente dos números é: ${n3}, ${n2}, ${n1} `)

}else{

    console.log(`A ordem crescente dos números é: ${n2}, ${n3}, ${n1} `)
}



function n1_n2_n3(n1, n2, n3){
    return n3 > n2 && n3 > n1 && n2 > n1
}

function n2_n1_n3(n1, n2, n3){
    return n3 > n2 && n3 > n1 && n1 > n2
}

function n1_n3_n2(n1, n2, n3){
    return n2 > n3 && n2 > n1 && n3 > n1
}

function n3_n1_n2(n1, n2, n3){
    return n2 > n3 && n2 > n1 && n1 > n3
}

function n3_n2_n1(n1, n2, n3){
    return n1 > n3 && n1 > n2 && n2 > n3
}










}
main()
