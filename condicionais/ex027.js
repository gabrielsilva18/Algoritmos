import{input} from './io_utils.js'

function main(){

    let dia_nascimento = Number(input('Digite um dia correspondente a data de nascimento : '))
    let mes_nascimento = Number(input('Digite um número correspondente ao mês de nascimento: '))
    let ultimo_dia_mes =  Number(input('Digite um número correspondente ao último dia do mês de nascimento: '))
    let ano_nascimento = Number(input('Digite um número correspondente ao ano de nascimento: '))

    let dia_atual = Number(input('Digite um número correspondente ao dia atual : '))
    let mes_atual = Number(input('Digite um número correspondente ao mês atual: '))
    let ano_atual = Number(input('Digite um número correspondente ao ano atual: '))

    let idade_dias = 0
    let idade_meses = 0
    let idade_anos = 0


    if(mes_atual > mes_nascimento && dia_atual < dia_nascimento){

        idade_anos = ano_atual - ano_nascimento
        idade_meses = mes_atual - mes_nascimento - 1
        idade_dias = dia_atual + (ultimo_dia_mes - dia_nascimento)

        console.log(`A pessoa tem ${idade_anos} anos, ${idade_meses} meses e ${idade_dias} dias`)

    }if(mes_atual > mes_nascimento && dia_atual > dia_nascimento){

        idade_anos = ano_atual - ano_nascimento
        idade_meses = mes_atual - mes_nascimento 
        idade_dias = (dia_atual - dia_nascimento) + 1

        console.log(`A pessoa tem ${idade_anos} anos, ${idade_meses} meses e ${idade_dias} dias`)

    }if(mes_atual < mes_nascimento && dia_atual < dia_nascimento){

        idade_anos = (ano_atual - ano_nascimento) - 1
        idade_meses = (12 - (mes_nascimento - mes_atual)) - 1
        idade_dias = (ultimo_dia_mes - dia_nascimento) + dia_atual

        console.log(`A pessoa tem ${idade_anos} anos, ${idade_meses} meses e ${idade_dias} dias`)

    }if(mes_atual < mes_nascimento && dia_atual > dia_nascimento){

        idade_anos = (ano_atual - ano_nascimento) - 1
        idade_meses = 12 - (mes_nascimento - mes_atual)
        idade_dias = (dia_atual - dia_nascimento) + 1

    }


}
main()