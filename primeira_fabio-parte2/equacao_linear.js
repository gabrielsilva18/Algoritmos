import {print , input} from './io_utils.js'

function main(){

    let a = Number(input('Digite um coeficiente a: '))
    let b = Number(input('Digite um coeficiente b: '))
    let c = Number(input('Digite um coeficiente c: '))
    let d = Number(input('Digite um coeficiente d: '))
    let e = Number(input('Digite um coeficiente e: '))
    let f = Number(input('Digite um coeficiente f: '))

    let x = ((c * e) - (b * f)) / ((a * e) - (b * d))
    let y = ((a * f) - (c * d)) / ((a * e) - (b * d))

    console.log(`O valor de X é ${x}, e o de Y é ${y}`)

}main()