# Portfólio - Gabriel Steffens

Portfólio pessoal em **Angular 18** (standalone components), com dados extraídos do currículo e um design minimalista e editorial, monocromático, com fontes finas contrastadas por acentos em DM Serif Display: tipografia grande, seções alternando fundo preto/cinza-claro, azul de destaque e animações suaves de "reveal" ao rolar a página.


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

## Pontos de Angular usados no projeto

- **Standalone components** (`standalone: true`): não há `NgModule`; cada componente declara suas próprias dependências em `imports`.
- **Signals** (`signal()`): estado reativo local, usado no menu mobile da navbar.
- **Diretiva de atributo customizada** (`appReveal`): encapsula a lógica de "revelar ao rolar a página" para reutilizar em qualquer seção.
- **`*ngFor` / `*ngIf`**: renderização de listas e condicionais a partir dos dados em `data/portfolio-data.ts`.
- **CSS por componente** (`styleUrl`): cada componente tem seu próprio arquivo `.css`, isolado dos demais (View Encapsulation padrão do Angular).

