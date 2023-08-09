import  prompt  from "prompt-sync";
let input = prompt()

function main() {

    let tamanho = Number(input('Digite o tamanho da PA: '))
    
    let i = 1
    let primeiro_termo = Number(input('Digite o primeiro termo da Pa: '))
    let razao = Number(input('Digite a razão da PA: '))
    let termos = []
    termos[i - 1] = primeiro_termo

    while(i < tamanho){

        termos[i] = primeiro_termo + (razao * i)
        i++
    }

    console.log(termos)
}
main()