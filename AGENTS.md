# Contexto do projeto (para a IA)

Este é um protótipo rápido feito em um minicurso. O tema, o nome e o público do app vêm sempre do pedido do usuário.

## Tema

- Troque os textos, o tipo de dados e os dados de exemplo da base pelos do tema pedido. Não mantenha o exemplo genérico.
- Não assuma o assunto do app. Use somente o que o pedido descreve.

## Regras técnicas

- Stack: Vite, React, TypeScript e Tailwind CSS. Não troque a stack.
- Sem banco de dados, sem login e sem backend. Todos os dados são de exemplo e ficam em `src/data/mock.ts`.
- Textos da interface em português do Brasil.
- Crie componentes pequenos em `src/components/`.
- Faça uma mudança de cada vez. Comece apenas pela tela principal.
- Depois de mudar algo, confirme que `npm run dev` continua rodando sem erros.

## Qualidade visual (vale para qualquer tema)

- Espaçamento generoso: nada colado nas bordas nem entre os itens.
- Hierarquia clara: título maior, subtítulos menores e texto de apoio em cinza.
- Cores consistentes: um fundo, um texto e no máximo 2 cores de destaque, escolhidas conforme o tema.
- Pense primeiro no celular (largura de 390px) e depois ajuste para telas maiores.
- A ação principal deve ser bem destacada, com estados de hover e foco.
- Escolha o tipo de layout (lista, cards, tabela, formulário) que melhor serve ao tema pedido.
