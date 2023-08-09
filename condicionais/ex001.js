import {print , input} from '../io_utils.js'


function main(){
    
    const [n1, n2, n3] = input('Digite 3 números: ').split(' ').map(Number)
    

    if (Sao_iguais(n1, n2, n3))
    {

      console.log(`\t> entre esses números existem 3 numeros iguais`)


    }else if (n1_n2_iguais(n1, n2, n3))
    {

    console.log(`\t> entre esses números existem 2 numeros iguais`)

    } else if (n1_n3_iguais(n1, n2, n3))
    {

        console.log(`\t> entre esses números existem 2 numeros iguais`)
    
    }else if (n2_n3_iguais(n1, n2, n3))
    {
        
        console.log(`\t> entre esses números existem 2 numeros iguais`)

    }else {
    
        console.log(`\t> Não existem números iguais`)
        
    }

    function Sao_iguais(n1, n2, n3){
    return n1 === n2 && n1 === n3 && n2 === n3

    }

    function n1_n2_iguais(n1, n2, n3){
    return n1 === n2 

    }

    function n1_n3_iguais(n1, n2, n3){
    return n1 === n3

    }

    function n2_n3_iguais(n1, n2, n3){
    return n2 === n3

    }

    


   
    
}
main()