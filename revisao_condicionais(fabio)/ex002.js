import {input} from './io_utils.js'

function main(){

let letra = input('Digite uma letra, F para feminino e M para masculino: ')

if(letra == 'f' || letra == 'F'){

    console.log('Feminino')

}else if(letra == 'm'|| letra == 'M'){

    console.log('Masculino')

}else{

    console.log('Sexo inválido!')
}



}
main()