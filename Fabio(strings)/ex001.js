import prompt  from "prompt-sync";
let input = prompt()


function main(){

let frase = input('Digite uma frase: ').toUpperCase()
let frase_criptografada = ''

for (let letra of frase) {
    
    if(letra != 'A' && letra != 'E' && letra != 'I' && letra != 'O' && letra != 'U'){

        letra = '#'
    }

    frase_criptografada += letra
}

    console.log(frase_criptografada)

}
main()