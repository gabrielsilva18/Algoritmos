import {print , input} from '../io_utils.js'


function main(){
    
    const [n1, n2, n3] = input('Digite 3 números, correspondentes aos lados de um triângulo: ').split(' ').map(Number)
    
 
if (formam_triangulo(n1, n2, n3)){
    console.log(`\t> Formam um triângulo `)

 if (Sao_iguais(n1, n2, n3))
    {
      console.log(`\t> Formam um triângulo equilátero`)


    }else if (n1_n2_iguais(n1, n2, n3))
    {
    console.log(`\t> Formam um triângulo isósceles`)

    } else if (n1_n3_iguais(n1, n2, n3))
    {
        console.log(`\t> Formam um triângulo isósceles`)
    
    }else if (n2_n3_iguais(n1, n2, n3))
    {
        console.log(`\t> Formam um triângulo isósceles`)

    }else {
        console.log(`\t> Formam um triângulo escaleno`)
    }

}



    function formam_triangulo(n1, n2, n3){
    return n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1

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