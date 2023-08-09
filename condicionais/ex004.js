import {print , input} from './io_utils.js'

function main(){

const [n] = input('Digite um número de 2 algarismos quaisquer: ').split(' ').map(Number)
const dezenas = Math.trunc(n / 10)
const unidades = n % 10


if (Sao_iguais(dezenas, unidades))
{
  console.log(`\t> os algarismos da dezena e da unidade são iguais`)

}else {
    
    console.log(`\t> os algarismos da dezena e da unidade são diferentes`)
    
}

function Sao_iguais(dezenas, unidades){
   return dezenas == unidades
}



}
main()
