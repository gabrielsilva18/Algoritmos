import { input } from "./io_utils.js"

//INCOMPLETO O DESCONTOP NÃO ESTÁ SENDO CALCULADO!

function main(){

let quantidade_morangos = Number(input('Digite a quantidade em KG de morangos: '))
let quantidade_macas = Number(input('Digite a quantidade em KG de maçãs: '))
let valor_total = 0 
let valor_maca = 0
let valor_morango = 0
let desconto = 0.1 * valor_total
let valor_final = 0

//verificar se fazem parte ou não das condições para se obter desconto!!
if(quantidade_macas + quantidade_morangos >= 8 || valor_total > 25){

    valor_final = valor_total - desconto

 if(quantidade_macas > 5 && quantidade_morangos > 5){

    valor_maca = quantidade_macas * 1.5
    valor_morango = quantidade_morangos * 2.2
    valor_total = valor_maca + valor_morango
    valor_final = valor_total - desconto
    

}else if(quantidade_macas > 5 && quantidade_morangos <= 5){

    valor_maca = quantidade_macas * 1.5
    valor_morango = quantidade_morangos * 2.5
    valor_total = valor_maca + valor_morango
    valor_final = valor_total - desconto

}else if(quantidade_macas <= 5 && quantidade_morangos > 5){

    valor_maca = quantidade_macas * 1.8
    valor_morango = quantidade_morangos * 2.2
    valor_total = valor_maca + valor_morango
    valor_final = valor_total - desconto

}else if(quantidade_macas <= 5 && quantidade_morangos <= 5){

    valor_maca = quantidade_macas * 1.8
    valor_morango = quantidade_morangos * 2.5
    valor_total = valor_maca + valor_morango
    valor_final = valor_total - desconto


}// condições não atentidas para se obter desconto
}if(quantidade_macas + quantidade_morangos < 8 || valor_total < 25){

    if(quantidade_macas > 5 && quantidade_morangos > 5){

        valor_maca = quantidade_macas * 1.5
        valor_morango = quantidade_morangos * 2.2
        valor_total = valor_maca + valor_morango
        valor_final = valor_total 

}else if(quantidade_macas > 5 && quantidade_morangos <= 5){

    valor_maca = quantidade_macas * 1.5
    valor_morango = quantidade_morangos * 2.5
    valor_total = valor_maca + valor_morango
    valor_final = valor_total 


}else if(quantidade_macas <= 5 && quantidade_morangos > 5){

    valor_maca = quantidade_macas * 1.8
    valor_morango = quantidade_morangos * 2.2
    valor_total = valor_maca + valor_morango
    valor_final = valor_total

}else if(quantidade_macas <= 5 && quantidade_morangos <= 5){

    valor_maca = quantidade_macas * 1.8
    valor_morango = quantidade_morangos * 2.5
    valor_total = valor_maca + valor_morango
    valor_final = valor_total

}

console.log(`O valor final foi de: ${valor_final} reais`)

}
}
main()
