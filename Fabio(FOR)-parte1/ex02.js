import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero = Number(input('Digite um número: '))
    let guarda_numeros = []
    let guarda_numeros_pares =  []
    


    for (let index = 0; index < numero; index++) {

        if(index % 2 == 0){
        guarda_numeros[index] = index
        
        }
    }

   
    guarda_numeros_pares = guarda_numeros.filter(elemento => elemento !== undefined)//usando o filter para retirar do array as posições vazias!
    

    console.log(guarda_numeros_pares)
}
main()