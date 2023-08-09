import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero_1 = Number(input('Digite um número: '))
    let numero_2 = Number(input('Digite um segundo número: '))
    let calculo_mmc = calcular_MMC(numero_1, numero_2)

    console.log(`O mmc desses números é: ${calculo_mmc}`)


}
main()


    function calcular_MMC(numero_1, numero_2) {

        let maior = Math.max(numero_1, numero_2);
        let mmc = maior;
      
        while (true) {
          if (mmc % numero_1 === 0 && mmc % numero_2 === 0) {
            break;
          }
      
          mmc += maior;
        }
      
        return mmc;
      }