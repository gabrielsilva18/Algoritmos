import  prompt  from "prompt-sync";
let input = prompt()

function main() {

    let guarda_canal_2 = 0
    let guarda_canal_4 = 0
    let guarda_canal_5 = 0
    let guarda_canal_7 = 0
    let guarda_canal_10 = 0
    let qtd_casas = 0

    while(true){

        let canal_assistido = Number(input('Qual o número do canal assistido: '))

        if(canal_assistido == 0){

            break
        }
        if(canal_assistido == 2){

            guarda_canal_2++
        }
        if(canal_assistido == 4){

            guarda_canal_4++
        }
        if(canal_assistido == 5){

            guarda_canal_5++
        }
        if(canal_assistido == 7){

            guarda_canal_7++
        }
        if(canal_assistido == 10){

            guarda_canal_10++
        }

        qtd_casas++
    }
    
    console.log(`Canal 2: ${calcula_percentual(guarda_canal_2, qtd_casas)}% de audiência;`)
    console.log(`Canal 4: ${calcula_percentual(guarda_canal_4, qtd_casas)}% de audiência;`)
    console.log(`Canal 5: ${calcula_percentual(guarda_canal_5, qtd_casas)}% de audiência;`)
    console.log(`Canal 7: ${calcula_percentual(guarda_canal_7, qtd_casas)}% de audiência;`)
    console.log(`Canal 10: ${calcula_percentual(guarda_canal_10, qtd_casas)}% de audiência;`)

}
main()

function calcula_percentual(contador, qtd_casas){

    let percentual = Math.trunc((contador / qtd_casas) * 100)

    return percentual
}