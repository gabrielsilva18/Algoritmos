import prompt from "prompt-sync"
let input = prompt()


function main(){

    const numero = Number(input('Digite um número de 3 algarismos: '))

    soma_com_inverso(numero)

}
main()

function soma_com_inverso(numero){

    const centenas = Math.trunc(numero / 100)
    const dezenas = Math.trunc((numero % 100) / 10)
    const unidades = Math.trunc((numero % 100) % 10)

    const inverso = (unidades * 100) + (dezenas * 10) + centenas

    const soma = numero + inverso 


    console.log(`A soma entre esse número e seu inverso é ${soma} `)

}