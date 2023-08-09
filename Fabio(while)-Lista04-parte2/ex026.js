import  prompt  from "prompt-sync";
let input = prompt()

function main() {

    let qtd_pessoas_bom = 0
    let qtd_pessoas_otimo = 0
    let qtd_pessoas_regular = 0
    let qtd_idade_geral = 0
    let qtd_idade_otimo = 0
    let qtd_pessoas_total = 0
   
  
    while(true){

        let idade = Number(input('Digite sua idade: '))
        let opiniao = Number(input('Digite um número de 1 a 4 com relação a seu nível de satisfação com o filme: '))

        if(opiniao == -1){

            break
        }
        if(opiniao == 1){

            qtd_idade_otimo += idade
            qtd_pessoas_otimo++
        }
        if(opiniao == 2){

            qtd_pessoas_bom++
        }
        if(opiniao == 3){

            qtd_pessoas_regular++
        }


        qtd_pessoas_total++
    }

    let media_idades_otimo = (qtd_idade_otimo / qtd_pessoas_otimo)
    let percentual_pessoas_bom = (qtd_pessoas_bom / qtd_pessoas_total) * 100


    console.log(`A média das idades das pessoas que responderam ótimo: ${media_idades_otimo}`)
    console.log(`A quantidade de pessoas que responderam regular é de: ${qtd_pessoas_regular}`)
    console.log(`O percentual de pessoas que responderam bom é de ${percentual_pessoas_bom.toFixed(2)}%`)
}
main()