import prompt  from "prompt-sync"
let input = prompt()


function main(){

    let tempoString = input('Digite o tempo no formato hh:mm:ss:')
    let tempoFormatado = formatarTempo(tempoString)

    console.log(tempoFormatado)

}
main()

function formatarTempo(tempo) {
    let partes = tempo.split(':')
    let horas = Number(partes[0])
    let minutos = Number(partes[1])
    let segundos = Number(partes[2])
  
    let horasFormatadas = horas + ' hora(s)'
    let minutosFormatados = minutos + ' minuto(s)'
    let segundosFormatados = segundos + ' segundo(s)'
  
    return horasFormatadas + ', ' + minutosFormatados + ' e ' + segundosFormatados
  }
  
