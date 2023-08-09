import { input, print } from "./io_utils.js"

function main(){

    let turno = input('Digite o turno em que o aluno estuda(M para matutino, V para vespertino e N noturno): ')

    if(turno == 'M'){

        console.log('Bom dia!') 

    }else if(turno == 'V'){

        console.log('Boa tarde!')

    }else if(turno == 'N'){

        console.log('Boa noite!')

    }else{

        console.log('Valor inválido!')
    }



}
main()