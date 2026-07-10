# Portfólio — Gabriel Steffens

Portfólio pessoal em **Angular 18** (standalone components), com dados extraídos do currículo e um design minimalista e editorial, monocromático, com fontes finas contrastadas por acentos em DM Serif Display: tipografia grande, seções alternando fundo preto/cinza-claro, azul de destaque e animações suaves de "reveal" ao rolar a página.

## Como rodar

```bash
npm install
npm start
```

Acesse `http://localhost:4200`. Qualquer alteração salva recarrega a página automaticamente (hot reload).

Para gerar a versão de produção (arquivos estáticos otimizados):

```bash
npm run build
```

Os arquivos finais ficam em `dist/portfolio-gabriel/`.

## Como o projeto está organizado (roteiro de estudo)

```
src/app/
├── models/portfolio-data.model.ts   → as "formas" dos dados (interfaces TypeScript)
├── data/portfolio-data.ts           → o conteúdo real (textos do currículo), tipado pelas interfaces
├── shared/reveal.directive.ts       → diretiva reutilizável de animação de scroll
└── components/
    ├── navbar/       → menu fixo no topo
    ├── hero/         → seção de abertura + diagrama SVG do pipeline de ETL
    ├── about/        → objetivo profissional + fatos rápidos
    ├── experience/    → timeline de experiências profissionais
    ├── skills/       → grid de habilidades técnicas + soft skills
    ├── education/    → formação acadêmica + cursos/certificações
    ├── contact/      → chamada final de contato
    └── footer/       → rodapé
```

**Sugestão de ordem para estudar o código:**

1. `models/portfolio-data.model.ts` e `data/portfolio-data.ts` — entenda como o conteúdo é separado da apresentação (o mesmo princípio de ETL que você aplica no trabalho: dado bruto → modelado → consumido).
2. `app.component.ts` — veja como a página é só a soma dos componentes, na ordem em que aparecem.
3. `components/navbar` — o componente mais simples, bom para entender `standalone`, `signal()` e eventos de clique.
4. `components/hero` — usa o `*ngFor` para desenhar o diagrama SVG a partir de uma lista de objetos (nada é "hardcoded" no HTML).
5. `shared/reveal.directive.ts` — uma diretiva de atributo customizada usando `IntersectionObserver`; aplicada em várias seções via `appReveal`.
6. Os demais componentes seguem o mesmo padrão: um array de dados tipado + `*ngFor` no template.

## Pontos de Angular usados no projeto

- **Standalone components** (`standalone: true`): não há `NgModule`; cada componente declara suas próprias dependências em `imports`.
- **Signals** (`signal()`): estado reativo local, usado no menu mobile da navbar.
- **Diretiva de atributo customizada** (`appReveal`): encapsula a lógica de "revelar ao rolar a página" para reutilizar em qualquer seção.
- **`*ngFor` / `*ngIf`**: renderização de listas e condicionais a partir dos dados em `data/portfolio-data.ts`.
- **CSS por componente** (`styleUrl`): cada componente tem seu próprio arquivo `.css`, isolado dos demais (View Encapsulation padrão do Angular).

## Personalizando

- Para atualizar textos (experiências, skills, cursos): edite só `src/app/data/portfolio-data.ts` — nenhum HTML precisa mudar.
- Para ajustar cores/tipografia: edite as variáveis CSS em `src/styles.css` (seção `:root`).
- Para trocar as fontes: a pilha usa fontes do sistema (`-apple-system` etc.), então funciona sem downloads externos.
