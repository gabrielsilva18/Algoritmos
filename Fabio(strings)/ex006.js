import prompt  from "prompt-sync";
let input = prompt()


function main(){

  
  const frase = input('Digite uma frase:')
  const novaFrase = substituirAlgarismosPorExtenso(frase)

  console.log(novaFrase)
  
}
main()

function substituirAlgarismosPorExtenso(frase) {
    const algarismosPorExtenso = {
      '0': 'zero',
      '1': 'um',
      '2': 'dois',
      '3': 'três',
      '4': 'quatro',
      '5': 'cinco',
      '6': 'seis',
      '7': 'sete',
      '8': 'oito',
      '9': 'nove'
    }
  
    let novaFrase = ''
  
    for (let i = 0; i < frase.length; i++) {
      const caractere = frase[i]
  
      if (caractere in algarismosPorExtenso) {

        novaFrase += algarismosPorExtenso[caractere]
      } else {
        
        novaFrase += caractere
      }
    }
  
    return novaFrase
  }