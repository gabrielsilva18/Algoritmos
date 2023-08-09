import prompt from 'prompt-sync'
let input = prompt()

function main(){

        let N = Number(input('Quantos funcionários você deseja cadastrar? '))
        let codigos = []
        let horas = []
        let dependentes = []
        let i = 0
      
        // Lê os dados dos funcionários
        while(i < N) {
          codigos[i] = Number(input(`Informe o código do ${i+1}º funcionário: `))
          horas[i] = Number(input(`Informe o número de horas trabalhadas pelo ${i+1}º funcionário: `))
          dependentes[i] = Number(input(`Informe o número de dependentes do ${i+1}º funcionário: `))
          i++
        }
      
        // Calcula o salário bruto e o líquido de cada funcionário
        i = 0
        while(i < N) {
          let salario_bruto = horas[i] * 12 + dependentes[i] * 40
          let inss = salario_bruto * 0.085
          let ir = salario_bruto * 0.05
          let salario_liquido = salario_bruto - inss - ir
      
          console.log(`Funcionário ${i+1} - Código: ${codigos[i]}`)
          console.log(`Salário bruto: R$ ${salario_bruto.toFixed(2)}`)
          console.log(`Desconto INSS: R$ ${inss.toFixed(2)}`)
          console.log(`Desconto IR: R$ ${ir.toFixed(2)}`)
          console.log(`Salário líquido: R$ ${salario_liquido.toFixed(2)}`)
          console.log('---------------------------')
          i++
        }

}
main()