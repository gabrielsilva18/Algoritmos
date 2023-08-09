import  prompt  from "prompt-sync";
let input = prompt()

function main() {

    let distancia = 600 // Km
    let gasolina = 50 // L
    let distancia_percorrida = 0
    let gasolina_gasta = 0

    while(distancia_percorrida < 600 && gasolina_gasta < 50){

        distancia_percorrida += Number(input('Digite a ditância percorrida: '))
        gasolina_gasta += Number(input('Digite a quantia de gasolina gasta: '))

    }

    if(distancia_percorrida >= 600 && gasolina_gasta <= 50){

        console.log(`O carro chegou ao seu destino `)

    }
    if(distancia_percorrida <= 600 && gasolina_gasta > 50){

        console.log(`O carro não conseguiu chegar ao destino, defido a falta de gasolina!`)
    }

    let consumo_gasolina = distancia_percorrida / gasolina_gasta

    console.log(`O consumo de combustível em Km/L foi de ${consumo_gasolina}KM/L`)

}
main()