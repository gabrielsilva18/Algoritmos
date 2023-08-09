import prompt from "prompt-sync";
let input = prompt()

function main(){
  
  let numero = Number(input("Digite um número:"))
  
  let fatorial = calcularFatorial(numero)
  
  console.log(`O fatorial do ${numero} é ${fatorial}.`)
  
}
main()


  function calcularFatorial(numero) {
    let fatorial = 1
  
    for (let i = 1; i <= numero; i++) {
      fatorial *= i
    }
  
    return fatorial
  }
  