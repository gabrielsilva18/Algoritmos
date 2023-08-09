import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let texto = input('Digite um texto: ').split(' ')
    let contador_palavras = 0 


    for (let palavra of texto) {
        
        contador_palavras++

    }

    console.log(`Existem ${contador_palavras} palavras no texto!`)
}
main()