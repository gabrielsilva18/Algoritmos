import prompt from "prompt-sync";
let input = prompt();

function main() {

    let qtd_alunos = 0
    let qtd_aprovados = 0
    let qtd_reprovados = 0
    
    while(true){
 
        let matricula = Number(input('Digite um número referente a matrícula, para encerrar digite 0:'))
        if(matricula == 0){
            break
        }

        qtd_alunos++
        let nota1 = Number(input('Digite a primeira nota: '))
        let nota2 = Number(input('Digite a segunda nota: '))
        let nota3 = Number(input('Digite a terceira nota: '))

        let media = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10

        if(media >= 7){

            qtd_aprovados++
        }else{

            qtd_reprovados++
        }

    }

    console.log('O total de aprovados foi de:', qtd_aprovados)
    console.log('O total de reprovados foi de:', qtd_reprovados)
    console.log('O total de alunos da turma e de:', qtd_alunos)

}
main()