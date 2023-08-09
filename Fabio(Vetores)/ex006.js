import prompt from "prompt-sync";
let input = prompt();

function main() {
  let vetor_binario = input("Digite um número binário de 8 dígitos: ");

  // Converter o número binário para decimal
  let decimal = parseInt(vetor_binario, 2);

  // Converter o número decimal para hexadecimal
  let hexadecimal = decimal.toString(16).toUpperCase();

  console.log(`Número decimal: ${decimal}`);
  console.log(`Número hexadecimal: ${hexadecimal}`);
}

main();
