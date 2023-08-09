import prompt from "prompt-sync";
let input = prompt();

function main() {

    let votosSerra = 0
    let votosDilma = 0
    let votosCiro = 0
    let votosOutros = 0
    let votosIndecisos = 0
    let votosNulos = 0
    let votosTotais = 0

    let opcao = Number(input('Digite o voto (45=Serra, 13=Dilma, 23=Ciro, 0=Nulo/Branco, 98=Outros, 99=Indeciso, -1=Fim): '))

    while (opcao !== -1) {
    switch (opcao) {
        case 45:
        votosSerra++
        break
        case 13:
        votosDilma++
        break
        case 23:
        votosCiro++
        break
        case 0:
        votosNulos++
        break
        case 98:
        votosOutros++
        break
        case 99:
        votosIndecisos++
        break
        default:
        console.log('Opção inválida!')
        break
    }
    votosTotais++;
    opcao = Number(input('Digite o voto (45=Serra, 13=Dilma, 23=Ciro, 0=Nulo/Branco, 98=Outros, 99=Indeciso, -1=Fim): '))
    }

    console.log(`Porcentagem de votos para Serra: ${(votosSerra / votosTotais * 100).toFixed(2)}%`)
    console.log(`Porcentagem de votos para Dilma: ${(votosDilma / votosTotais * 100).toFixed(2)}%`)
    console.log(`Porcentagem de votos para Ciro: ${(votosCiro / votosTotais * 100).toFixed(2)}%`)
    console.log(`Porcentagem de votos para Outros: ${(votosOutros / votosTotais * 100).toFixed(2)}%`)
    console.log(`Porcentagem de votos indecisos: ${(votosIndecisos / votosTotais * 100).toFixed(2)}%`)
    console.log(`Porcentagem de votos nulos/brancos: ${(votosNulos / votosTotais * 100).toFixed(2)}%`)
    console.log(`Total de entrevistados: ${votosTotais}`)

    let porcentagemVotosValidos = ((votosSerra + votosDilma + votosCiro) / votosTotais) * 100

    if (porcentagemVotosValidos < 50) {
    console.log('Não haverá segundo turno.')
    } else {
    console.log('Haverá segundo turno.')
    }

}
 main