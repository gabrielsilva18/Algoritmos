//Nesse momento, ambos os processos ficam bloqueados e assim ficarão para sempre. Essa situação é denominada deadlock.

//Algoritmo do banqueiro - Rrepresentação de um método que visa identificar o deadlock, ele reúne os recursos disponíveis do sistema, e
//ao mesmo tempo análisa os processos, para determinar de quais recursos os mesmos precisão, se eles precisarem de algo, que não leta no sistema
//eles são denominados como não seguros e separados como possíveis Deadlocks.

// Definindo os recursos disponíveis e alocados para cada processo

let recursosDisponiveis = [10, 5, 7];

// representa a quantidade de recursos que foram atribuídos a cada processo em um determinado momento
let recursosAlocados = [
  [0, 1, 0], //processo 0
  [2, 0, 0], //processo 1
  [3, 0, 2], //processo 2
  [2, 1, 1], //processo 3
  [0, 0, 2], //processo 4
];

// representa a quantidade de recursos que cada processo ainda precisa para ser concluído.
let demandas = [
  [7, 5, 3], //processo 0
  [3, 2, 2], //processo 1
  [9, 0, 2], //processo 2
  [2, 2, 2], //processo 3
  [4, 3, 3], //processo 4
];

// representa a quantidade máxima de recursos que cada processo pode precisar.
let recursosMaximos = [
  [7, 5, 3], //processo 0
  [3, 3, 2], //processo 1
  [9, 2, 2], //processo 2
  [4, 3, 3], //processo 3
  [5, 4, 4], //processo 4
];

let sequenciaSegura = []; //uma sequência que armazenará a ordem segura de execução

// verifica se um estado é seguro
function isEstadoSeguro() {
  let processos = recursosAlocados.length;
  let recursosDisponiveisCopia = [...recursosDisponiveis];
  let alocados = recursosAlocados.map((arr) => [...arr]);

  let concluidos = Array(processos).fill(false); //acompanha se cada processo foi concluído
  let count = 0; //um contador para controlar quantos processos foram concluídos

  while (count < processos) {
    let encontrado = false;
    for (let i = 0; i < processos; i++) {
      if (!concluidos[i]) {
        let podeAlocar = true;
        for (let j = 0; j < recursosDisponiveis.length; j++) {
          // Verifica se a demanda do processo i pode ser atendida pelos recursos disponíveis
          if (demandas[i][j] > recursosDisponiveisCopia[j]) {
            podeAlocar = false;
            break;
          }
        }
        // se a demanda puder ser atendida
        if (podeAlocar) {
          // Adiciona os recursos alocados do processo i aos recursos disponíveis
          for (let j = 0; j < recursosDisponiveis.length; j++) {
            recursosDisponiveisCopia[j] += alocados[i][j];
          }
          // Marca o processo i como concluído
          sequenciaSegura.push(i);
          concluidos[i] = true;
          encontrado = true;
          count++;
        }
      }
    }

    if (!encontrado) {
      break;
    }
  }

  // Retorna true se todos os processos foram concluídos (estado seguro), se não retorna false
  return count === processos;
}

// Testando o estado seguro
if (isEstadoSeguro()) {
  //todas as demandas de recursos dos processos podem ser atendidas sem haver Deadlock
  console.log("O estado é seguro. A sequência segura é: ", sequenciaSegura);
} else {
  console.log("O estado não é seguro, possível Deadlock.");
}
