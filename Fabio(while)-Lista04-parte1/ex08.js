import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero_x = Number(input('Digite um número: '))
    let lista_numeros = []
    let i = 1
    lista_numeros[i - 1] = Number(input('Digite o primeiro número da lista: '))

    while(true){

        lista_numeros[i] = Number(input('Digite um número da lista: '))

        if(lista_numeros[i - 1] + lista_numeros[i] == numero_x){
            break
        }

        i++
    }

    console.log(`O numero anterior somado com o atual foi igual a ${numero_x}`)

}
main()