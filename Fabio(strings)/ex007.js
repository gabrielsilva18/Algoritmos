import prompt  from "prompt-sync";
let input = prompt()


function main(){

    let verbo = input('Digite um verbo terminado em ER: ').toUpperCase()
    let index = verbo.length
    let verbo_presente = ''

    for (let letra of verbo) {
        
        if(letra == 'E'){

            verbo_presente += 'O'
            break
        }

        verbo_presente += letra

    }

    console.log(verbo_presente)
}
main()