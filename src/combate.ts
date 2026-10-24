import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { atacar, goblin, jogador, orc, dragao, usarPocao } from "./index.js";

const terminal = createInterface({ input: stdin, output: stdout });

let escolha = "";
let batalhaAtiva = true;

const inimigos = [goblin, orc, dragao];
let indiceInimigo = 0;
let inimigoAtual = inimigos[indiceInimigo];

while (escolha !== "4" && batalhaAtiva) {
  if (jogador.vida <= 0) {
    console.log(`${jogador.nome} foi derrotado!`);
    break;
  }

  if (!inimigoAtual) {
    console.log("Parabéns! Você derrotou todos os monstros!");
    break;
  }

  escolha = await terminal.question(
    "Escolha uma ação (1 - Atacar, 2 - Usar poção, 3 - Ver stats, 4 - Sair): ",
  );

  switch (escolha) {
    case "1":
      atacar(jogador, inimigoAtual);

      if (inimigoAtual.vida <= 0) {
        console.log(`${inimigoAtual.nome} foi derrotado!`);

        indiceInimigo++;

        inimigoAtual = inimigos[indiceInimigo];

        if (inimigoAtual) {
          console.log(`O próximo inimigo é: ${inimigoAtual.nome}`);
        } else {
          console.log("Parabéns! Você venceu todos os monstros!");
          batalhaAtiva = false;
        }
      } else {
        atacar(inimigoAtual, jogador);

        if (jogador.vida <= 0) {
          console.log(`${jogador.nome} foi derrotado!`);
          batalhaAtiva = false;
        }
      }

      break;

    case "2":
      usarPocao(jogador);
      break;

    case "3":
      console.log(
        `Stats do jogador: Nome: ${jogador.nome}, Vida: ${jogador.vida}/${jogador.vidaMaxima}, Ataque: ${jogador.ataque}, Crítico: ${jogador.crítico || 0}%, Poções: ${jogador.pocoes || 0}`,
      );

      if (inimigoAtual) {
        console.log(
          `Stats do inimigo: Nome: ${inimigoAtual.nome}, Vida: ${inimigoAtual.vida}/${inimigoAtual.vidaMaxima}, Ataque: ${inimigoAtual.ataque}`,
        );
      }

      break;

    case "4":
      console.log("Saindo do jogo...");
      batalhaAtiva = false;
      break;

    default:
      console.log("Ação inválida.");
      break;
  }
}

terminal.close();