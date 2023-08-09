import prompt from "prompt-sync";
let input = prompt()

function main(){

    let limiteInferior = Number(input("Digite o limite inferior: "))
    let limiteSuperior = Number(input("Digite o limite superior: "))
    let i = limiteInferior

    while(i <= limiteSuperior) {

        if (verificação_primos(i)) {
          console.log(i);
          
        }
        i++
      }
}
main()

function verificação_primos(numero){
    let index = 3

    //Por que 2 é o unico par que é primo
    if(numero == 2){

        return true
    }

    //numero 1, 0 e negativos, não são primos.
    //numeros pares, alem do 2, não são primos
    if(numero == 1 || numero <= 0 | numero % 2 == 0){

        return false
    }

    //começa em 3, pois 0, 1 e 2 ja sabemos que não são primos
    // index += 2, para pegarmos apenas números ímpares
    while( index < numero) {
        
        if(numero % index == 0){

            return false
        }
        index += 2
    }

    return true
}