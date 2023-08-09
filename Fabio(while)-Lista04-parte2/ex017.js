import  prompt  from "prompt-sync";
let input = prompt()

function main() {

    let nome = []
    let peso = []
    let altura = []
    let i = 0
    let guarda_posição_maior_peso = 0
    let guarda_posição_menor_peso = 0
    let guarda_posição_maior_altura = 0
    let guarda_posição_menor_altura = 0
    let guarda_maior_peso = 0
    let guarda_menor_peso = Infinity
    let guarda_maior_altura = 0
    let guarda_menor_altura = Infinity   
  
    while (true) {
  
      nome[i] = input('Digite o nome da participante: ').toUpperCase()
  
      if (nome[i] === 'FIM') {
  
        break
      }
  
      peso[i] = Number(input('Digite o peso da participante: '))
      altura[i] = Number(input('Digite a altura da participante: '))
  
      if (peso[i] > guarda_maior_peso) {// com maior peso
  
        guarda_maior_peso = peso[i]
        guarda_posição_maior_peso = i
      }
      if (peso[i] < guarda_menor_peso) {// com menor peso
  
        guarda_menor_peso = peso[i]
        guarda_posição_menor_peso = i
      }
      if (altura[i] > guarda_maior_altura) {// com maior altura
  
        guarda_maior_altura = altura[i]
        guarda_posição_maior_altura = i
      }
      if (altura[i] < guarda_menor_altura) {// com menor altura
  
        guarda_menor_altura = altura[i]
        guarda_posição_menor_altura = i
      }
  
      i++
    }
  
    console.log(`A candidata de maior peso tem ${guarda_maior_peso}Kg e seu nome é: ${nome[guarda_posição_maior_peso]}`)
    console.log(`A candidata de menor peso tem ${guarda_menor_peso}Kg e seu nome é: ${nome[guarda_posição_menor_peso]}`)
    console.log(`A candidata de maior altura tem ${guarda_maior_altura}m e seu nome é: ${nome[guarda_posição_maior_altura]}`)
    console.log(`A candidata de menor altura tem ${guarda_menor_altura}m  e seu nome é: ${nome[guarda_posição_menor_altura]}`)
    

}
main()
  