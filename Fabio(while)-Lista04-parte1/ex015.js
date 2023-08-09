import prompt from "prompt-sync";
let input = prompt();

function main(){

    let numeroDecimal = Number(input('Digite um número decimal entre 0 e 255: '))

    // Verifica se o número está dentro do intervalo válido

    while (numeroDecimal < 0 || numeroDecimal > 255) {

    numeroDecimal = Number(prompt('Número inválido. Digite um número decimal entre 0 e 255: '))
    }

    let numeroBinario = numeroDecimal.toString(2)// toString é usado para converter o número para a base necessária
    let numeroHexadecimal = numeroDecimal.toString(16).toUpperCase()

    console.log(`Número decimal: ${numeroDecimal}`)
    console.log(`Número binário: ${numeroBinario}`)
    console.log(`Número hexadecimal: ${numeroHexadecimal}`)

}
main()