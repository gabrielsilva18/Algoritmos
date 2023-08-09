import prompt from "prompt-sync"
let input = prompt()

function main(){
    
    const segundos = Number(input('digite um valor correspondente a um tempo em segundos: '))
    
    
    tranformas_segundos(segundos)
    
}
main()

function tranformas_segundos(segundos){

    const horas = segundos / 3600
    
    const minutos = (segundos % 3600) / 60
    
    const segundos_resto = (segundos % 3600) % 60
    
    console.log(` Tal valor corresponde a: ${Math.trunc(horas)} horas`)
    console.log(`${Math.trunc(minutos)} minutos`)
    console.log(`${Math.trunc(segundos_resto)} segundos`)

}