import prompt from "prompt-sync";
let input = prompt()

function main(){

    let primeiro_numero = Number(input('Digite um primeiro número: '))
    let segundo_numero = Number(input('Digite um segundo número: '))

    while(primeiro_numero !== segundo_numero){

        let segundo_numero = Number(input('Digite um segundo número novamente: '))

        if(segundo_numero === primeiro_numero){
            break
       }
    }

    console.log(`Os números são iguais`)
}
main()