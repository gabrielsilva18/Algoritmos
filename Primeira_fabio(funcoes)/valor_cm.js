import prompt from "prompt-sync"
let input = prompt()


function main(){

    const m = Number(input('digite um valor em metros:  '))
   
    calcula_cm(m)
}
main()

function calcula_cm(m){

    const cm = m * 100

    console.log(`Esse valor em centímetros é: ${cm}`)

}