import { input } from "./io_utils.js"

function main(){

    let letra = input('Digite uma letra: ')

    if( letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i'|| letra == 'I'|| letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U'){

        console.log(' A letra digitada é uma vogal')

    }else{

        console.log(' A letra digitada é uma consoante')
    }



}
main()