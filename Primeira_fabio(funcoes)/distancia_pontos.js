import prompt from "prompt-sync"
let input = prompt()


function main(){

    let x1 = Number(input('Digite o ponto x do primeiro ponto: '))
    let y1 = Number(input('Digite o ponto y do primeiro ponto: '))
    let x2 = Number(input('Digite o ponto x do segundo ponto: '))
    let y2 = Number(input('Digite o ponto y do segundo ponto: '))

   
    calcula_distancia(x1, y1, x2, y2)
}
main()

function calcula_distancia(x1, y1, x2, y2){

    let distancia = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

    console.log(`A distância entre os pontos é de: ${distancia.toFixed(2)}`)

}