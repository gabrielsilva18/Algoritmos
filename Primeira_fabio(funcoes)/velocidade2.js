import prompt from "prompt-sync"
let input = prompt()


function main(){

    const velocidade_kmh = Number(input('adiocione uma valor em km/h:'))
    
    transforma_em_ms(velocidade_kmh)

}
main()

function transforma_em_ms(velocidade_kmh){

    const velocidade_ms = velocidade_kmh / 3.6

    console.log(`o valor será ${velocidade_ms} m/s`)


}