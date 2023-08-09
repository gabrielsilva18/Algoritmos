import {print , input} from '../io_utils.js'


function main(){
    
    const [angulo1, angulo2, angulo3] = input('Digite 3 valores, correspondentes a ângulos de um triângulo: ').split(' ').map(Number)

    if (eh_triangulo(angulo1, angulo2, angulo3))
    {

      console.log(`\t> formam triângulo`)


    if (eh_acutangulo(angulo1, angulo2, angulo3))
    {

    console.log(`\t> Acutângulo`)

    } else if (eh_retangulo(angulo1, angulo2, angulo3))
    {

        console.log(`\t> Retângulo`)
    
    }else if (eh_obtusangulo(angulo1, angulo2, angulo3))
    {
        
        console.log(`\t> Obtusângulo`)

    }else {
    
        console.log(`\t> Outro tipo!`)
   
    }
    } else {

        console.log(`\t> Não formam triângulo`)

    }


    function eh_triangulo(angulo1, angulo2, angulo3){
    return angulo1 + angulo2 + angulo3 === 180

    }

    function eh_acutangulo(angulo1, angulo2, angulo3){
    return angulo1 < 90 || angulo2 < 90 || angulo3 < 90

    }

    function eh_retangulo(angulo1, angulo2, angulo3){
    return angulo1 === 90 || angulo2 === 90 || angulo3 === 90

    }

    function eh_obtusangulo(angulo1, angulo2, angulo3){
    return angulo1 > 90 || angulo2 > 90 || angulo3 > 90

    }

    
}
main()