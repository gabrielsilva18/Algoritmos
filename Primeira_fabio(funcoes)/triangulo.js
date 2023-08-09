import prompt from "prompt-sync"
let input = prompt()


function main(){

    const base = Number(input('digite um valor, correspondente a base de um triângulo '))
    const altura = Number(input('digite um valor, correspondente a altura do mesmo triângulo '))

    calcula_area(base, altura)

}
main()

function calcula_area(base, altura){

    const area = (base * altura)/2
    
    console.log(`a area do triângulo : ${area}`)
}