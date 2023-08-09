import prompt from "prompt-sync";
let input = prompt()

function main(){

    let tamanho_lista = Number(input('Digite o tamanho da lista: '))
    let lista = new Array(tamanho_lista)
    let maior_numero = 0
    let index = 0


    while(index < lista.length) {
        
        lista[index] = Number(input('Digite um número: '))
        index++
    }

     maior_numero = Math.max(...lista)

     console.log(`Maior número: ${maior_numero}`)
}
main()