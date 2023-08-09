import {print , input} from './io_utils.js'


function main(){

    const velocidade_ms = Number(input('adiocione uma valor em m/s:'))
    const velocidade_kmh = velocidade_ms * 3.6

    print(`o valor em km por h será ${velocidade_kmh}`)


}
main()