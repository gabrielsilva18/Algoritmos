import prompt from "prompt-sync";
let input = prompt();

function main() {
  let pergunta = Number(
    input(
      "Digite a opção que deseja seguir:\n" +
        "1. Gerar vetor N posições, pedir valor padrão\n" +
        "2. Preencher vetor manualmente item a item\n" +
        "3. Preencher vetor automaticamente\n" +
        "4. Mostrar vetor\n" +
        "5. Transformar vetor: elevar a potência N\n" +
        "6. Contar: Positivos, Negativos e Zeros\n" +
        "7. Somatório: De todos, Dos Negativos e dos Positivos\n" +
        "8. Exibir Média e Mediana: De Todos, Dos Positivos e Dos Negativos\n" +
        "9. Exibir Maior e Menor número\n" +
        "10. Sortear dois números: um positivo e um negativo" +
        "11. Gerar N grupos de T tamanhos. Não repetir valores" +
        "12. Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)" +
        "13. Top N maiores números" +
        "14. Top N menores números" +
        "15. Listar valor médio, e listar números maiores que a Média e Menores que a Média" +
        "17. Somatório da Média dos Números Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos à metade" +
        "18. Ordenar os números em ordem crescente:" +
        "19. Ordenar em ordem decrescente" +
        "20. Eliminar números múltiplos de N e M (simultaneamente)" +
        "0. Sair"
    )
  );

  /*if (pergunta == 1) {
    let tamanho = Number(input("Qual será o tamanho do vetor: "));
    gerando_N_grupos_de_T_tamanhos(tamanho);
  }*/
}

main();

function gerar_vetor_N_posições(tamanho) {
  let valorPadrao = prompt("Digite o valor padrão: ");
  let vetor = [];

  for (let i = 0; i < tamanho; i++) {
    vetor[i] = valorPadrao;
  }

  return vetor;
}

//tudo ok!
function preencher_vetor(vetor, tamanho) {
  //2- preencher vetor manualmente!
  for (let i = 0; i < tamanho; i++) {
    vetor[i] = input(`Digite o ${i}º elemento do vetor: `);
  }
  return vetor;
}
//tudo ok!
function preencher_vetor_automaticamente(vetor, tamanho, max, min) {
  //3-preencher vetor automaticamente!
  for (let i = 0; i < tamanho; i++) {
    vetor[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return vetor;
}
//tudo ok
function mostrar_vetor(vetor) {
  //4-mostrar vetor!
  return vetor;
}
//tudo ok
function elevando_elementos_do_vetor(vetor, expoente, tamanho) {
  //5- Transformar vetor: elevar a potência N!
  for (let i = 0; i < vetor.length; i++) {
    vetor[i] = vetor[i] ** expoente;
  }
  return vetor;
}
//tudo ok
function somatorio_todos_e_contando_elementos(vetor, tamanho) {
  //6- Contar: Positivos, Negativos e Zeros;
  //7- Somatório de todos, dos negativos e dos positivos;

  let somatorio_positivos = 0;
  let somatorio_negativos = 0;
  let somatorio_todos = 0;
  let contador_negativos = 0;
  let contador_positivos = 0;
  let contador_zeros = 0;
  for (let i = 0; i < tamanho; i++) {
    if (vetor[i] == 0) {
      contador_zeros++;
      somatorio_todos += vetor[i];
    } else if (vetor[i] > 0) {
      contador_positivos++;
      somatorio_todos += vetor[i];
      somatorio_positivos += vetor[i];
    } else if (vetor[i] < 0) {
      contador_negativos++;
      somatorio_todos += vetor[i];
      somatorio_negativos += vetor[i];
    }
  }

  let resultados = [
    contador_zeros,
    contador_positivos,
    contador_negativos,
    somatorio_todos,
    somatorio_positivos,
    somatorio_negativos,
  ];

  return resultados;
}
//tudo ok
function calculando_media_mediana_todos_negativos_positivos(vetor, tamanho) {
  //8- calculando_media_mediana_todos_negativos_positivos
  //Média:
  let contador_negativos = 0;
  let contador_positivos = 0;
  let contador_todos = 0;
  let somatorio_todos = 0;
  let somatorio_negativos = 0;
  let somatorio_positivos = 0;

  for (let i = 0; i < tamanho; i++) {
    if (vetor[i] == 0) {
      contador_todos++;
    } else if (vetor[i] > 0) {
      somatorio_positivos += vetor[i];
      somatorio_todos += vetor[i];
      contador_todos++;
      contador_positivos++;
    } else if (vetor[i] < 0) {
      somatorio_negativos += vetor[i];
      somatorio_todos += vetor[i];
      contador_todos++;
      contador_negativos++;
    }
  }

  let media_todos = somatorio_todos / contador_todos;
  let media_positivos = somatorio_positivos / contador_positivos;
  let media_negativos = somatorio_negativos / contador_negativos;

  //Mediana:

  vetor.sort((a, b) => a - b);
  let index = tamanho;
  let Mediana = 0;
  if (index % 2 == 0) {
    // se o tamanho do vetor for par
    //lemrando que no vetor o tamanho começa em 0
    Mediana = vetor[Math.ceil(index / 2)]; // por exemplo se index for 5, Math.ceil(5/2), que seria = a 3. pois o Math.ceil faz o arredondamento desse valor;
  } else {
    Mediana =
      (vetor[Math.ceil(index / 2)] + vetor[Math.ceil(index / 2 + 1)]) / 2;
  }

  let resultados = [media_todos, media_positivos, media_negativos, Mediana];

  return resultados;
}
// tudo ok
function gerando_N_grupos_de_T_tamanhos(qtd_grupos, tamanho) {
  //11- gerando_N_grupos_de_T_tamanhos
  // Criar um array com números de 1 a N*T
  let numeros = [];

  for (let i = 1; i <= qtd_grupos * tamanho; i++) {
    numeros.push(i);
  }

  // Embaralhar os números aleatoriamente
  numeros.sort(() => Math.random() - 0.5);

  // Dividir o array em N grupos de tamanho T
  let grupos = [];
  for (let i = 0; i < qtd_grupos; i++) {
    grupos.push(numeros.slice(i * tamanho, (i + 1) * tamanho));
  }

  return grupos;
}
//tudo ok
function exibir_maior_menor(vetor) {
  //9- Exibir Maior e Menor número
  let maior = Math.max(...vetor);
  let menor = Math.min(...vetor);

  let resultados = [maior, menor];
  return resultados;
}
//tudo ok
function sortear_numero_positivo_negativo(max, min) {
  // Sorteia um número positivo dentro do intervalo definido por min e max
  let numeroPositivo = Math.abs(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  // Sorteia um número negativo dentro do intervalo definido por min e max
  // Calcula a diferença entre o máximo e o mínimo
  let diferenca = max - min;

  // Gera um número aleatório dentro da metade dessa diferença
  let numeroAleatorio = Math.random() * (diferenca / 2);

  // Subtrai o número aleatório da metade da diferença para obter um número negativo dentro do intervalo
  let numeroNegativo = Math.trunc(min - numeroAleatorio);

  // Retorna os números sorteados
  let resultados = [numeroPositivo, numeroNegativo];

  return resultados;
}

function verificarPresencaVetorSistema(numeros_sistema) {
  //12- Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)

  //let sistema = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Vetor do sistema
  let novoVetor = input("Digite o novo vetor (separado por espaços): ")
    .split(" ")
    .map(Number);

  let i = 0;
  let presente = true;

  for (let elemento of novoVetor) {
    if (elemento !== sistema[i]) {
      presente = false;
      break;
    }

    i++;
  }

  if (presente) {
    console.log("O vetor está 100% presente nos números do sistema.");
  } else {
    console.log("O vetor não está 100% presente nos números do sistema.");
  }

  //verificarPresencaVetorSistema()
}
//tudo ok
function N_maiores_numeros(vetor, N) {
  //13. Top N maiores números
  // Ordena o vetor em ordem decrescente
  vetor.sort((a, b) => b - a);

  let maiores = [];

  for (let i = 0; i < N; i++) {
    maiores += vetor[i];
    maiores += ",";
  }
  return maiores;
}
//tudo ok
function N_menores_numeros(vetor, N) {
  //14. Top N menores números
  // Ordena o vetor em ordem crescente
  vetor.sort((a, b) => a - b);
  let menores = [];
  // Obtém os N primeiros elementos do vetor (N menores números)
  for (let i = 0; i < N; i++) {
    menores += vetor[i];
    menores += ",";
  }

  return menores;
}

function listar_media_e_numeros_acima_abaixo_da_mesma(vetor, tamanho) {
  //15. Listar valor médio, e listar números maiores que a Média e Menores que a Média
  //Média:

  let contador_todos = 0;
  let somatorio_todos = 0;

  for (let i = 0; i < tamanho; i++) {
    if (vetor[i] == 0) {
      contador_todos++;
    } else if (vetor[i] > 0) {
      somatorio_todos += vetor[i];
      contador_todos++;
    } else if (vetor[i] < 0) {
      somatorio_todos += vetor[i];
      contador_todos++;
    }
  }

  let numeros_maiores = [];
  let numeros_menores = [];
  let media_todos = somatorio_todos / contador_todos;

  for (let i = 0; i < tamanho; i++) {
    if (vetor[i] > media_todos) {
      numeros_maiores += vetor[i];
    } else if (vetor[i] < media_todos) {
      numeros_menores += vetor[i];
    }
  }

  let resultados = [numeros_maiores, numeros_menores];
  return resultados;
}

function somatorio_multiplos_2_com_produto_acumulado_dos_negativos_pares_pela_metade(
  vetor
) {
  //17. Somatório da Média dos Números Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos à metade

  let somaPositivos = 0; // Variável para armazenar a soma dos números positivos múltiplos de dois
  let produtoNegativos = 1; // Variável para armazenar o produto acumulado dos números negativos pares reduzidos à metade

  let contadorPositivos = 0; // Variável para contar quantos números positivos múltiplos de dois foram encontrados

  // Percorre o vetor
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 0 && vetor[i] % 2 === 0) {
      // Verifica se o número é positivo e múltiplo de dois
      somaPositivos += vetor[i]; // Adiciona o número ao somatório dos positivos
      contadorPositivos++; // Incrementa o contador de positivos
    } else if (vetor[i] < 0 && vetor[i] % 2 === 0) {
      // Verifica se o número é negativo e par
      produtoNegativos *= vetor[i] / 2; // Multiplica o número pelo produto acumulado dos negativos, reduzido à metade
    }
  }

  let mediaPositivos = somaPositivos / contadorPositivos; // Calcula a média dos positivos

  let resultado = mediaPositivos + produtoNegativos; // Calcula o somatório da média dos positivos com o produto acumulado dos negativos

  return resultado;
}

function ordenar_em_ordem_crescente(vetor) {
  let resposta = Number(
    input(
      "Digite 1 se deseja ordenar todos, 2 caso deseje ordenar pares, 3 para ímpares, 4 para positivos e 5 para negativos: "
    )
  );
  let impares = [];
  let pares = [];
  let positivos = [];
  let negativos = [];
  let posicao_impares = 0;
  let posicao_pares = 0;
  let posicao_positivos = 0;
  let posicao_negativos = 0;

  //criando vetor so de pares, so de impares, so de positivos e so de negativos
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      pares[posicao_pares] = vetor[i];
      posicao_pares++;
    }
    if (vetor[i] % 2 != 0) {
      impares[posicao_impares] = vetor[i];
      posicao_impares++;
    }
    if (vetor[i] > 0) {
      positivos[posicao_positivos] = vetor[i];
      posicao_positivos++;
    }
    if (vetor[i] < 0) {
      negativos[posicao_negativos] = vetor[i];
      posicao_negativos++;
    }
  }

  if (resposta == 1) {
    vetor.sort((a, b) => a - b);
    console.log(`Vetor ordenado ${vetor}`);
  }

  if (resposta == 2) {
    pares.sort((a, b) => a - b);
    console.log(`Vetor ordenado ${pares}`);
  }

  if (resposta == 3) {
    impares.sort((a, b) => a - b);
    console.log(`Vetor ordenado ${impares}`);
  }

  if (resposta == 4) {
    positivos.sort((a, b) => a - b);
    console.log(`Vetor ordenado ${positivos}`);
  }

  if (resposta == 5) {
    negativos.sort((a, b) => a - b);
    console.log(`Vetor ordenado ${negativos}`);
  }
}

function ordenar_em_ordem_decrescente(vetor) {
  let resposta = Number(
    input(
      "Digite 1 se deseja ordenar todos, 2 caso deseje ordenar pares, 3 para ímpares, 4 para positivos e 5 para negativos: "
    )
  );
  let impares = [];
  let pares = [];
  let positivos = [];
  let negativos = [];
  let posicao_impares = 0;
  let posicao_pares = 0;
  let posicao_positivos = 0;
  let posicao_negativos = 0;
  //criando vetor so de pares, so de impares, so de positivos e so de negativos
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      pares[posicao_pares] = vetor[i];
      posicao_pares++;
    }
    if (vetor[i] % 2 != 0) {
      impares[posicao_impares] = vetor[i];
      posicao_impares++;
    }
    if (vetor[i] > 0) {
      positivos[posicao_positivos] = vetor[i];
      posicao_positivos++;
    }
    if (vetor[i] < 0) {
      negativos[posicao_negativos] = vetor[i];
      posicao_negativos++;
    }
  }

  if (resposta == 1) {
    vetor.sort((a, b) => b - a);
    console.log(`Vetor ordenado ${vetor}`);
  }

  if (resposta == 2) {
    pares.sort((a, b) => b - a);
    console.log(`Vetor ordenado ${pares}`);
  }

  if (resposta == 3) {
    impares.sort((a, b) => b - a);
    console.log(`Vetor ordenado ${impares}`);
  }

  if (resposta == 4) {
    positivos.sort((a, b) => b - a);
    console.log(`Vetor ordenado ${positivos}`);
  }

  if (resposta == 5) {
    negativos.sort((a, b) => b - a);
    console.log(`Vetor ordenado ${negativos}`);
  }
}

function remover_do_vetor_multiplos_simultaneos(N, M, vetor) {
  let posicao_retirados = 0;
  let posicao_novo_vetor = 0;
  let numeros_retirados = [];
  let novo_vetor = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % N == 0 && vetor[i] % M == 0) {
      numeros_retirados[posicao_retirados] = vetor[i];
      posicao_retirados++;
    } else {
      novo_vetor[posicao_novo_vetor] = vetor[i];
      posicao_novo_vetor++;
    }
  }
  let resultados = [novo_vetor, numeros_retirados];
  return resultados;
}
