import prompt from "prompt-sync";
let input = prompt()

function main(){

    let limiteInferior = Number(input("Digite o limite inferior: "))
    let limiteSuperior = Number(input("Digite o limite superior: "))
    let pares = escreverPares(limiteInferior, limiteSuperior)
    
    console.log(pares)
}
main()

function escreverPares(limiteInferior, limiteSuperior) {
    let pares = []
    let guarda_numeros_pares = []

    for (let i = limiteInferior; i <= limiteSuperior; i++) {
      if (i % 2 === 0) {
       pares[i] = i
      }
    }

    guarda_numeros_pares = pares.filter(Element => Element !== undefined)

    return guarda_numeros_pares
  }
  