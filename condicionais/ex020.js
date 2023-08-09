import{input} from './io_utils.js'


function main(){

    let angulo = Number(input('Digite a medida de um ângulo em graus, entre 0 e 360: '))



    if(angulo <= 90){

        console.log('Este ângulo está localizado no primeiro quadrante')

    }

    if(angulo > 90 && angulo <= 180){

        console.log('Este ângulo está localizado no segundo quadrante')

    }


    if(angulo > 180 && angulo <= 270){

        console.log('Este ângulo está localizado no terceiro quadrante')

    }

    if(angulo > 270 && angulo <= 360){

        console.log('Este ângulo está localizado no primeiro quadrante')

    }

   


   





}
main()