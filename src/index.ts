// Utiliza o interface para definir a estrutura de um personagem
export interface Personagem {
    nome: string;
    vida: number;
    vidaMaxima: number;
    ataque: number;
    crítico?: number;
    pocoes?: number;
}

export let jogador: Personagem = {
    nome: "Cavaleiro de Hojak",
    vida: 70,
    vidaMaxima: 100,
    ataque: 20,
    crítico: 20,
    pocoes: 3
};

export let goblin: Personagem = {
    nome: "Goblin",
    vida: 40,
    vidaMaxima: 40,
    ataque: 10
}

export let orc: Personagem = {
    nome: "Orc",
    vida: 70,
    vidaMaxima: 70,
    ataque: 15
}

export let dragao: Personagem = {
    nome: "Dragão",
    vida: 120,
    vidaMaxima: 120,
    ataque: 20,
}

// Função para atacar um personagem
export function atacar(atacante: Personagem, defensor: Personagem): void {
    if (atacante.vida <= 0) {
        console.log(`${atacante.nome} não pode atacar porque está morto.`);
        return;
    }

    if (defensor.vida <= 0) {
        console.log(`${defensor.nome} já está morto.`);
        return;
    }

    let dano = atacante.ataque;

    const chanceCritico = (atacante.crítico || 0) / 100;

    if (Math.random() < chanceCritico) {
        dano *= 2;
        console.log("Ataque crítico!");
    }

    defensor.vida = Math.max(0, defensor.vida - dano); // retorna o valor máximo entre 0 e a vida atual do defensor menos o dano causado

    console.log(`${atacante.nome} atacou ${defensor.nome} e causou ${dano} de dano.`);
    console.log(`${defensor.nome} agora tem ${defensor.vida} de vida.`);
}

// Função para usar poção
export function usarPocao(jogador: Personagem): void {

    if (jogador.vida <= 0) {
        console.log(`${jogador.nome} não pode usar poção porque está morto.`);
        return;
    }

    if (!jogador.pocoes || jogador.pocoes <= 0) {
        console.log(`${jogador.nome} não tem poções para usar.`);
        return;
    }

    if (jogador.vida >= jogador.vidaMaxima) {
        console.log(`${jogador.nome} já está com a vida cheia.`);
        return;
    }

    const cura = 30; // quantidade de vida recuperada pela poção

    let vidaAntes = jogador.vida; // armazena a vida antes de usar a poção

    jogador.vida = Math.min(jogador.vidaMaxima, jogador.vida + cura); // retorna o valor mínimo entre a vida máxima do jogador e a vida atual mais a quantidade de vida recuperada pela poção

    jogador.pocoes--;

    console.log(`${jogador.nome} usou uma poção e recuperou ${jogador.vida - vidaAntes} de vida.`);
    console.log(`${jogador.nome} agora tem ${jogador.vida} de vida.`);
    console.log(`${jogador.nome} agora tem ${jogador.pocoes} poções restantes.`);
}

// Função reponsável por iniciar a batalha entre dois personagens
export function IniciarBatalha(jogador: Personagem, inimigo: Personagem): void {
    console.log(`A batalha entre ${jogador.nome} e ${inimigo.nome} começou!`);

    // Loop de batalha
    while (jogador.vida > 0 && inimigo.vida > 0) {
        atacar(jogador, inimigo);

        if (inimigo.vida <= 0) {
            console.log(`${inimigo.nome} foi derrotado!`);
            break;
        }

        atacar(inimigo, jogador);

        if (jogador.vida <= 0) {
            console.log(`${jogador.nome} foi derrotado!`);
            break;
        }
    }
}