import prompt from 'prompt-sync'
let input = prompt()

function main(){

    let N = Number(input('Quantos bois você tem? '))
    let identificação = []
    let peso = []

    for (let index = 0; index < N; index++) {
        
    identificação[index] = Number(input('Qual o número de identificação desse boi: '))
    peso[index] = Number(input("Qual o peso dele: "))

    }
    
    let Boi_pesado = calculaMaior_peso(peso, identificação)
    let Boi_leve = calculaMenor_peso(peso, identificação)

    console.log(`A seguir temos respectivamente a identificação e o peso do boi, mais PESADO ${Boi_pesado[0]}, ${Boi_pesado[1]}KG`)
    console.log(`A seguir temos respectivamente a identificação e o peso do boi, mais LEVE ${Boi_leve[0]}, ${Boi_leve[1]}KG`)

}
main()

function calculaMaior_peso(peso, identificação){

    let maior_peso = Math.max(...peso)
    let boi_mais_pesado = []

    for (let index = 0; index < peso.length; index++) {
       
       if(peso[index] == maior_peso){

        boi_mais_pesado[0] = identificação[index]
        boi_mais_pesado[1] = peso[index]
        
       }
    }

    return boi_mais_pesado

}

function calculaMenor_peso(peso, identificação){

    let menor_peso = Math.min(...peso)
    let boi_mais_leve = []

    for (let index = 0; index < peso.length; index++) {
       
       if(peso[index] == menor_peso){

        boi_mais_leve[0] = identificação[index]
        boi_mais_leve[1] = peso[index]
        
       }
    }

    return boi_mais_leve

}