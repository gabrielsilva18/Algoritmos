import  prompt  from "prompt-sync";
let input = prompt()

function main(){

    let emprestimo = 3000
    let pagamento_diario = 200
    let valor_restante = 0 
    let juros_diario = emprestimo * (0.85 / 100)
    let contador_dias = 0

    while(valor_restante < emprestimo){

        emprestimo = emprestimo + juros_diario
        valor_restante += 200
        contador_dias++
    }

    console.log(contador_dias)

}
main()