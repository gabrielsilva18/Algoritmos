import prompt from "prompt-sync";
let input = prompt()

function main(){

    let tamanho_lista = Number(input('Digite o tamanho da lista: '))
    let lista = new Array(tamanho_lista)
    let maior_numero = 0


    for (let index = 0; index < lista.length; index++) {
        
        lista[index] = Number(input('Digite um número: '))
    }

     maior_numero = Math.max(...lista)

     console.log(`Maior número: ${maior_numero}`)
}
main()