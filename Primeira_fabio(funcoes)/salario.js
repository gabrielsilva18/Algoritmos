import prompt from "prompt-sync"
let input = prompt()


function main(){

    const salario = Number(input('digite um valor,correspondente ao salário: '))

    calcula_aumento(salario)

}
main()

function calcula_aumento(salario){

    const salario_aumento = salario * 0.25
    const salario_final = salario_aumento + salario
    
    console.log(`O salário após o aumento é: ${salario_final}`)

}