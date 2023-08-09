import prompt from "prompt-sync";
let input = prompt();
import { readFileSync } from "fs";

function main() {
  let valor_rifa = Number(input("Digite o valor do ponto da rifa: "));
  let taxa_adm_porcentagem = Number(
    input("Digite o valor da taxa de administração: ")
  );
  let numero_premios = Number(input("Digite o número de prêmios: "));
  let nomes_rifas = readFileSync("./nomes_rifa.txt", "utf-8");
  let nomes = nomes_rifas.replace(/\r/g, "").split("\n"); // trocando quebra de linhas por espaços
  //g, significa que o replace irá continuar até acabar o arquivo
  //removendo o /r e o /n, pois existe os dois em arquivo txt
  let numero_pontos_vendidos = 0;
  let pontos_nao_vendidos = 0;
  let posicao_vendidos = [];
  let posicao_nao_vendidos = [];

  for (let i = 0; i < nomes.length; i++) {
    // console.log(nomes[i]);

    if (nomes[i] != "-") {
      numero_pontos_vendidos++;
      posicao_vendidos += i;
    } else {
      pontos_nao_vendidos++;
      posicao_nao_vendidos += i;
    }
  }

  let array_posicoes_sorteadas = [...posicao_vendidos]; // transformando em array para poder usar o filter depois
  //sortear(nomes, numero_premios, array_posicoes_sorteadas);
  //console.log();

  let valor_arrecadado_bruto = numero_pontos_vendidos * valor_rifa;
  let valor_arrecadado_liquido =
    valor_arrecadado_bruto -
    valor_arrecadado_bruto * (taxa_adm_porcentagem / 100);
  let valor_taxa = valor_arrecadado_bruto - valor_arrecadado_liquido;

  let resposta = 10;
  let posicao_vendidos_organizada = [...posicao_vendidos]; // so para ficar organizado para a opção 4
  let posicao_nao_vendidos_organizada = [...posicao_nao_vendidos];
  while (resposta != 0) {
    mostrar_opcoes();
    resposta = Number(input("Digite a alternativa que deseja seguir:"));

    if (resposta == 1) {
      console.log(`Valor arrecadado total: ${valor_arrecadado_bruto} reais`);
      console.log(
        `Valor arrecadado liquido: ${valor_arrecadado_liquido} reais`
      );
      console.log(`Valor da taxa: ${valor_taxa} reais`);
    } else if (resposta == 2) {
      sortear(nomes, numero_premios, array_posicoes_sorteadas);
    } else if (resposta == 3) {
      valor_rifa = Number(input("Digite o NOVO valor do ponto da rifa: "));
      taxa_adm_porcentagem = Number(
        input("Digite o NOVO valor da taxa de administração: ")
      );
      numero_premios = Number(input("Digite o NOVO número de prêmios: "));

      valor_arrecadado_bruto = numero_pontos_vendidos * valor_rifa;
      valor_arrecadado_liquido =
        valor_arrecadado_bruto -
        valor_arrecadado_bruto * (taxa_adm_porcentagem / 100);
      valor_taxa = valor_arrecadado_bruto - valor_arrecadado_liquido;
    } else if (resposta == 4) {
      console.log(`Pontos disponíveis: ${posicao_nao_vendidos_organizada}`);
      console.log(`Quantidade de pontos vendidos: ${numero_pontos_vendidos}`);
      console.log(`Quantidade de pontos não vendidos: ${pontos_nao_vendidos}`);
      console.log(`Lista de pontos vendidos: ${posicao_vendidos_organizada}`);
      console.log(
        `Lista de pontos não vendidos: ${posicao_nao_vendidos_organizada}`
      );
    }
  }
}
main();

function mostrar_opcoes() {
  let opcoes = " ";
  opcoes +=
    "\n" +
    " 1- Calcule o valor Arrecadado (Total de pontos vendidos pelo valor do Ponto): Detalhando valor líquido e taxa administração.";
  opcoes += "\n" + " 2- Realizar Sorteio;";
  opcoes += "\n" + " 3- Zerar/resetar programa;";
  opcoes += "\n" + " 4- Mostre Dados gerais da Rifa";
  opcoes += "\n" + " 0- Sair";

  console.log(opcoes);
}

function sortear(nome, numero_premios, posicao_vendidos) {
  let numero_sorteado = 0;
  let posicao_sorteado = 0;

  console.log(nome);
  console.log(posicao_vendidos);
  while (numero_premios > 0) {
    numero_sorteado = Math.floor(Math.random() * nome.length);

    if (
      verificar_validacao_numero_sorteado(posicao_vendidos, numero_sorteado) &&
      nome[numero_sorteado] !== "-" //nome na posição do sorteado
    ) {
      numero_premios = numero_premios - 1;
      posicao_sorteado = numero_sorteado;
      let nome_sorteado = nome[numero_sorteado]; //nome sorteado, recebe nome na posição do sorteado

      console.log(`O número sorteado:${posicao_sorteado}`);
      console.log(`O nome do ganhador:${nome_sorteado}`);

      posicao_vendidos = posicao_vendidos.filter(
        (posicao) => posicao != posicao_sorteado
      );
      //retirando a posição sorteada
      nome = nome.filter((name) => name != nome_sorteado);
      //retirando o sorteado do resto do sorteio
      console.log(nome);
    }

    //console.log(numero_sorteado);
    //console.log(numero_premios);
  }
}

function verificar_validacao_numero_sorteado(
  posicao_vendidos,
  numero_sorteado
) {
  for (let i = 0; i < posicao_vendidos.length; i++) {
    if (numero_sorteado == posicao_vendidos[i]) {
      return true;
    }
  }

  return false;
}
