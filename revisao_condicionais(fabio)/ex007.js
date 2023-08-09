import { input } from "./io_utils.js"

function main(){

let salario = Number(input('Digite o valor do salário: '))
let aumento_salarial = 0
let salario_aumentado = 0

if(salario <= 280){
    aumento_salarial = salario * 0.20
    salario_aumentado = salario + aumento_salarial

    console.log(`O salário antes do reajuste era de R$${salario}`)
    console.log(`O percentual de aumento aplicado foi de 20%`)
    console.log(`O aumento salarial foi de R$${aumento_salarial}`)
    console.log(`O salário passa a ser $R${salario_aumentado} `)
    
}else if (280 < salario && salario <= 700){
    aumento_salarial = salario * 0.15
    salario_aumentado = salario + aumento_salarial
    
    console.log(`O salário antes do reajuste era de R$${salario}`)
    console.log(`O percentual de aumento aplicado foi de 15%`)
    console.log(`O aumento salarial foi de R$${aumento_salarial}`)
    console.log(`O salário passa a ser $R${salario_aumentado} `)
        
}else if(700 < salario && salario <= 1500){
    aumento_salarial = salario * 0.10
    salario_aumentado = salario + aumento_salarial
    
    console.log(`O salário antes do reajuste era de R$${salario}`)
    console.log(`O percentual de aumento aplicado foi de 10%`)
    console.log(`O aumento salarial foi de R$${aumento_salarial}`)
    console.log(`O salário passa a ser $R${salario_aumentado} `)
        
}else if(salario > 1500){
    aumento_salarial = salario * 0.05
    salario_aumentado = salario + aumento_salarial
    
    console.log(`O salário antes do reajuste era de R$${salario}`)
    console.log(`O percentual de aumento aplicado foi de 5%`)
    console.log(`O aumento salarial foi de R$${aumento_salarial}`)
    console.log(`O salário passa a ser $R${salario_aumentado} `)
        
}

}
main()