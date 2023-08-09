import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let senha = input('Digite uma senha: ')
    let senha_correta = 'Algoritmos'
    let senha_criptografada = ''

    if(senha == senha_correta){

        console.log('Senha correta!')
    }else{

    for (let caractere of senha) {
        
        caractere = '#'
        senha_criptografada += caractere
    }

    console.log('Senha incorreta!')
}



}
main()