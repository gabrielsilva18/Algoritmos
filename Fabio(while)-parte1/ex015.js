import prompt from "prompt-sync";
let input = prompt()

function main(){
      
      let numero = Number(input("Digite um número inteiro: "))
      let sequencia_numerica = sequencia(numero)

      console.log(sequencia_numerica)
      
}
main()

function sequencia(numero) {

    let termoAnterior = 0
    let termoAtual = 0
    let termos = []
    let guarda_termos = []
    let i = 1

    while(i <= numero) {

      termoAtual = termoAnterior + i
      termos[i] = termoAtual
      termoAnterior = termoAtual
      i++

    }

    guarda_termos = termos.filter(Element => Element !== undefined)

    return guarda_termos
  }