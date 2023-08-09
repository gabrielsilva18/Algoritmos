import {print , input} from './io_utils.js'

function main(){

const [dia_hoje, mes_hoje, ano_hoje ] = input('Digite 3 valores correspondesntes ao dia, mês e ano atuais: ').split(' ').map(Number)
const [dia_nascimento, mes_nascimento, ano_nascimento] = input('Digite 3 valores correspondesntes ao dia, mês e ano de nascimento: ').split(' ').map(Number)

const ano_idade = ano_hoje - ano_nascimento



}
main()
