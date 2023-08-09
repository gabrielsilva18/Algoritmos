import  prompt  from "prompt-sync";
let input = prompt()

function main() {

    let populacao_A = 200000
    //let crescimento_populacao_A = populacao_A * (3.5/100)// 200000 * 3.5%
    let populacao_B = 800000
    //let crescimento_populacao_B = populacao_B * (1.35/100)// 800000 * 1.35%
    let contador_anos = 0

    while(populacao_A <= populacao_B){

        let crescimento_populacao_A = populacao_A * (3.5/100)// 200000 * 3.5%
        let crescimento_populacao_B = populacao_B * (1.35/100)// 800000 * 1.35%
        populacao_A += crescimento_populacao_A
        populacao_B += crescimento_populacao_B

        contador_anos++
    }

    console.log(`Serão necessários ${contador_anos} anos`)
}
main()