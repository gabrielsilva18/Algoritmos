import  prompt  from "prompt-sync";
let input = prompt()

function main() {

   calcularValorTotal()

}
main()

function calcularValorTotal() {
    let nomeProduto = ''
    let preco = 0
    let quantidade = 0 
    let total = 0
  
    while (true) {
      nomeProduto = input('Digite o nome do produto ou "FIM" para encerrar):')
  
      if (nomeProduto.toUpperCase() === 'FIM') {

        break
      }
  
      preco = Number(input('Digite o preço do produto:'))
      quantidade = Number(input('Digite a quantidade comprada:'))
  
      if (quantidade <= 10) {
        total = preco * quantidade
      } 
      else if (quantidade <= 20) {
        total = preco * quantidade * 0.9 // 10% de desconto
      } 
      else if (quantidade <= 50) {
        total = preco * quantidade * 0.8 // 20% de desconto
      } 
      else {
        total = preco * quantidade * 0.75 // 25% de desconto
      }

      console.log(`Produto: ${nomeProduto}`)
      console.log(`Valor total a ser pago: R$ ${total.toFixed(2)}`)
    }
  }