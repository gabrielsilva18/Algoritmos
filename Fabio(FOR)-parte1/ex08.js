import prompt from "prompt-sync";
let input = prompt()

function main(){

    let numero = Number(input("Digite um número: "));
    let limite_Superior = Number(input("Digite o limite superior: "));
    let limite_Inferior = Number(input("Digite o limite inferior: "));

// garante que o limite inferior é menor que o limite superior
if (limite_Inferior > limite_Superior) {
  [limite_Inferior, limite_Superior] = [limite_Superior, limite_Inferior];
}

for (let i = limite_Inferior; i <= limite_Superior; i++) {
  if (i % numero === 0) {
    console.log(i);
  }
}

}
main()