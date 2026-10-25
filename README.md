# Base mínima do minicurso

Projeto de partida para aprender e experimentar com React, TypeScript, Vite e Tailwind CSS. Os dados são exemplos locais; não há banco de dados, login ou backend.

## Requisitos

- [Git para Windows](https://git-scm.com/download/win), que inclui o Git Bash
- [Node.js LTS](https://nodejs.org/)

No Git Bash, confira a instalação:

```bash
git --version
node --version
npm --version
```

## Clonar e executar

No Git Bash, escolha uma pasta onde deseja guardar o projeto e rode:

```bash
git clone https://github.com/juoliveiraapps/base-minima-minicurso.git
cd base-minima-minicurso
npm install
npm run dev
```

Abra no navegador o endereço local mostrado pelo Vite (geralmente `http://localhost:5173`). Para parar o servidor, volte ao Git Bash e pressione `Ctrl + C`.

## Pedir uma modificação com um prompt

Abra a pasta clonada no VS Code ou no editor com IA que estiver usando. Escreva um pedido curto e específico, por exemplo:

> Mude somente a tela principal para mostrar um título “Meu primeiro projeto” e um botão azul escrito “Começar”. Mantenha o layout simples e funcionando bem no celular. Explique quais arquivos alterou.

Para outras mudanças, diga o que quer ver, em qual parte da tela e qualquer detalhe importante. Faça uma alteração por vez e confira o resultado no navegador.

## Arquivos úteis

- `src/App.tsx`: tela principal
- `src/index.css`: estilos globais
- `src/data/mock.ts`: dados de exemplo
- `AGENTS.md`: contexto e regras do projeto

Depois de clonar, cada aluno pode criar sua própria cópia no GitHub para salvar alterações. O comando `git clone` cria a cópia local no computador.
