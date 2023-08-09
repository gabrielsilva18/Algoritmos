import prompt from "prompt-sync";
let input = prompt()

function main(){

    let limiteInferior = Number(input("Digite o limite inferior: "))
    let limiteSuperior = Number(input("Digite o limite superior: "))
    let impares = escreverImpares(limiteInferior, limiteSuperior)
    
    console.log(impares)

}
main()

function escreverImpares(limiteInferior, limiteSuperior) {
    let impares = []
    let guarda_numeros_impares = []

    for (let i = limiteInferior; i <= limiteSuperior; i++) {
      if (i % 2 !== 0) {
       impares[i] = i
      }
    }

    guarda_numeros_impares = impares.filter(Element => Element !== undefined)

    return guarda_numeros_impares
  }
  