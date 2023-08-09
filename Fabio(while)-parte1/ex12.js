import prompt from "prompt-sync";
let input = prompt()

function main(){

    let tamanho_lista = Number(input('Digite o tamanho da lista: '))
    let lista = new Array(tamanho_lista)
    let soma = 0
    let media = 0
    let index = 0

    while( index < lista.length) {
        
        lista[index] = Number(input('Digite um número: '))
        soma += lista[index]
        index++
    }

    media = (soma / lista.length)

    console.log(`Soma: ${soma}`)
    console.log(`Média: ${media}`)
    
}
main()