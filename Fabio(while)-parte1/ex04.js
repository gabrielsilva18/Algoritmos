import prompt from "prompt-sync";
let input = prompt()

function main(){


    let A0 = Number(input("Digite o valor inicial: "))
    let Limite = Number(input("Digite o limite: "))
    let R = Number(input("Digite a razão: "))
    let i = A0

   while( i < Limite) {

    console.log(i)
    i *= R
      }

}
main()