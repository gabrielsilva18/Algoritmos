import{input} from './io_utils.js'

function main(){

    let num = Number(input('Digite uma senha: '))
   
    if(num == '1234'){

        console.log(`ACESSO PERMITIDO!`)
    }else{

        console.log(`ACESSO NEGADO!`)
    }

}
main()