import prompt from "prompt-sync";
let input = prompt();

function main() {

    let pontos1 = 0
    let pontos2 = 0

    while(true){

        let codigo_ponto = Number(input('Digite um numero indicando o ganhador.(1 - para jogador 1 e 2 para jogador 2): '))

        if(pontos1 >= 21 && pontos1 - pontos2 >= 2 ||
        pontos2 >= 21 && pontos2 - pontos1 >= 2){

            break
        }

        if(codigo_ponto == 1){

            pontos1++
        }else if(codigo_ponto == 2){

            pontos2++
        }else{
            console.log('CÓDIGO INVÁLIDO!')
        }
    }

    if(pontos1 > pontos2){

        console.log('O jogador 1 venceu a partida!')
    }else{

        console.log('O jogador 2 venceu a partida!')
    }
}
main()

