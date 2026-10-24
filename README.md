# ⚔️ Arena dos Monstros

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=for-the-badge" alt="Status">
</p>

> Jogo de combate em turnos rodando diretamente no terminal, desenvolvido em TypeScript puro para praticar lógica de programação, orientação a objetos/estruturas de dados e interatividade no console.

---

## 🛠️ Tecnologias Utilizadas

* **TypeScript** — Tipagem estática, interfaces e organização robusta do código.
* **Node.js** — Ambiente de execução JavaScript.
* **Node.js Readline Promises** — Captura de inputs do usuário no terminal de forma assíncrona.
* **TSX** — Execução dinâmica de arquivos TypeScript em tempo de desenvolvimento.
* **Git e GitHub** — Versionamento de código e documentação.

---

## 🎮 Funcionalidades

- [x] Criação de personagens e inimigos.
- [x] Sistema de ataque e cálculo de dano.
- [x] Chance de acerto crítico.
- [x] Sistema de vida e derrota.
- [x] Uso de poções para recuperação de vida.
- [x] Menu interativo no terminal.
- [x] Consulta de status do jogador e dos inimigos.
- [x] Progressão entre diferentes inimigos.
- [ ] Implementação de novas mecânicas de combate e habilidades especiais.

---

## 👾 Atributos dos Personagens

| Personagem | Vida Inicial | Ataque |
| :--- | :---: | :---: |
| **Cavaleiro de Hojak** *(Player)* | 100 | 20 |
| **Goblin** | 40 | 10 |
| **Orc** | 70 | 15 |
| **Dragão** | 120 | 20 |

> *Nota: Os valores representam a base inicial do projeto e estão sujeitos a balanceamentos durante o desenvolvimento.*

---

## ▶️ Como Executar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/LevizBlessedpo/arena_of_monsters-rpg.git](https://github.com/LevizBlessedpo/arena_of_monsters-rpg.git)
   
2. **Entre na pasta do projeto:**
   ```bash
   cd arena_of_monsters

3. **Instale as depêndencias:**
   ```bash
   npm install

4. **Execute o jogo:**
   ```bash
   npx tsx src/combate.ts
