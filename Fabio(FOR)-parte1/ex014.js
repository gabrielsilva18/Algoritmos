import prompt from "prompt-sync";
let input = prompt()

function main(){

      let numero = Number(input("Digite um número: "))
      let quadrado = maior_quadrado(numero)


      console.log(`O maior quadrado do número ${numero} é ${quadrado}`)
      

}
main()

function maior_quadrado(numero) {
    let maior_quadrado = 0
    

    for (let i = 0; i <= numero; i++) {

      if (i * i <= numero) {

        maior_quadrado = i * i
      }

    }

    return maior_quadrado
  }