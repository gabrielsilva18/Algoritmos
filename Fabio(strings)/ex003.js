import prompt  from "prompt-sync";
let input = prompt()


function main(){

    let frase = input('Digite uma frase: ')
    let frase_sem_espaco = frase.split(' ')
    let frase_sem_espaco_junta = frase_sem_espaco.join('')

    console.log(frase_sem_espaco_junta)

}
main()