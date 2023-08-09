import {print , input} from './io_utils.js'

function main(){

const [n1, n2, n3] = input('Digite 3 números quaisquer: ').split(' ').map(Number)
const max = Math.max(n1, n2, n3)
const min = Math.min(n1, n2, n3)


console.log(`Dentre os números, ${max} é o maior`)





}
main()
