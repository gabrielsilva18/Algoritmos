import {print , input} from './io_utils.js'


function main(){

    const velocidade_kmh = Number(input('adiocione uma valor em km/h:'))
    const velocidade_ms = velocidade_kmh / 3.6

    print(`o valor será ${velocidade_ms} m/s`)


}
main()