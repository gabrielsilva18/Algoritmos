import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero_1 = Number(input('Digite um numero: '))
    let numero_2 = Number(input('Digite um segundo numero: '))

    let x = Math.max(numero_1, numero_2)
    let n = Math.min(numero_1, numero_2)

    while(n > 2){

        x = x / n
        console.log(`Valor de x: ${x}`)

        n = n-1
    }

   console.log(`Valor de n: ${n}`)
}
main()