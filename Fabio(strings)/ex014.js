import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let nome = input('Digite o seu nome: ').toUpperCase()
    let login1 = gera_login(nome)

    console.log(login1)
}
main()

function gera_login(nome){

    let nome1 = nome.split(' ')
    let login_parte1 = 0
    let login_parte2 = 0
     for (let letra of nome1) {
        
        login_parte1 = letra[0]
        login_parte2 = letra[1]
     }
    
     let login = login_parte1 + login_parte2

    return login
}