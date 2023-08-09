import  prompt  from "prompt-sync";
let input = prompt()

function main() {

        let continuar = 'SIM'
      
        while (continuar.toUpperCase() === 'SIM') {
          const investimento = Number(input('Informe o valor a ser investido por mês: '))
          const taxaJuros = Number(input('Informe a taxa de juros mensal (%): '))
      
          calcula_saldo(investimento, taxaJuros)
      
            
        continuar = input('Deseja processar mais um ano? (Sim/Não)').toUpperCase()
          let saldo = 0
         
        }
      
}
main()

function calcula_saldo(investimento, taxaJuros){

    let saldo = 0
    let i = 0

          while(i < 12) {
            saldo += investimento;
            saldo += saldo * (taxaJuros / 100)
            i++
          }
          console.log(`Saldo do investimento após 1 ano: ${saldo.toFixed(2)}`)
      
          
        
}