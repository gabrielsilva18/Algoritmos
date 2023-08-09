import prompt from 'prompt-sync'
let input = prompt()

function main(){

    let n = Number(input('Digite a quantidade de eleitores: '))
    let voto = []
    let contador_candidato_1 = 0
    let contador_candidato_2 = 0
    let contador_candidato_3 = 0
    let contador_brancos = 0
    let contador_nulos = 0
    let index = 0

    while(index < n) {
      
        voto = Number(input('Informe o seu voto: '))

        if(voto == 1){

            contador_candidato_1++

        }else if(voto == 2){

            contador_candidato_2++

        }else if(voto == 3){

            contador_candidato_3++

        }else if(voto == 9){

            contador_nulos++

        }else if(voto == 0){

            contador_brancos++
        }
        index++
    }

    //a)
    console.log(`O candidato 1 recebeu ${contador_candidato_1} votos`)
    console.log(`O candidato 2 recebeu ${contador_candidato_2} votos`)
    console.log(`O candidato 3 recebeu ${contador_candidato_3} votos`)

    //b)
    console.log(`O total de votos nulos foi de ${contador_nulos}`)

    //c)
    console.log(`O total de votos em branco foi de ${contador_brancos}`)

    //d)
    let venceu = calcular_vencedor(contador_candidato_1, contador_candidato_2, contador_candidato_3)
    console.log(venceu)
}
main()

function calcular_vencedor(contador_candidato_1, contador_candidato_2, contador_candidato_3){

    let quem_venceu = Math.max(contador_candidato_1, contador_candidato_2, contador_candidato_3)
    let vencedor = ''

    if(contador_candidato_1 == contador_candidato_2 || contador_candidato_1 == contador_candidato_3 || contador_candidato_3 == contador_candidato_2){

        vencedor = 'Houve empate na eleição'
    
    }else if(quem_venceu == contador_candidato_1){

        vencedor = 'Candidato 1 venceu'

    }else if(quem_venceu == contador_candidato_2){

        vencedor = 'Candidato 2 venceu'

    } else if(quem_venceu == contador_candidato_3){

        vencedor = 'Candidato 3 venceu'

    }

    return vencedor
}


