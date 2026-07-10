/**
 * Fonte única de dados do portfólio.
 *
 * Em vez de espalhar textos soltos dentro dos templates HTML, todo o conteúdo
 * "de negócio" (currículo do Gabriel) mora aqui, tipado pelas interfaces em
 * `models/portfolio-data.model.ts`. Cada componente injeta este arquivo (ou
 * futuramente um serviço) e apenas renderiza. Isso é o mesmo princípio de
 * separar dados/ETL da camada de apresentação — algo que o próprio Gabriel
 * aplica no trabalho dele.
 */
import {
  CursoOuCertificacao,
  ExperienciaProfissional,
  GrupoDeHabilidades,
  ItemFormacao,
  PerfilPessoal,
} from '../models/portfolio-data.model';

export const PERFIL: PerfilPessoal = {
  nome: 'Gabriel Steffens',
  cargoObjetivo: 'Desenvolvedor Full Stack',
  localizacao: 'Rio do Sul, SC',
  idade: 22,
  email: 'gabrielsteffens2003@gmail.com',
  telefone: '(47) 9 8831-3652',
  linkedin: 'https://www.linkedin.com/in/gabriel-steffens',
  github: 'https://github.com/gabste8831',
  resumo:
    'Desenvolvedor Back-End atuando em arquiteturas Node.js e JavaScript na Apresenta.me, ' +
    'dentro de processos de migração, modelagem e análise de grandes volumes de dados, além do ' +
    'desenvolvimento de APIs e rotinas de ETL. Estudante da 8ª fase de Sistemas de Informação, com ' +
    'base consolidada em desenvolvimento web construída também em experiência anterior de Front-End, ' +
    'e mais de 3 anos de vivência com SEO, marketing digital e análise de dados.',
};

export const EXPERIENCIAS: ExperienciaProfissional[] = [
  {
    cargo: 'Desenvolvedor Back-End — Migração de Dados',
    empresa: 'Apresenta.me (sistema de gestão imobiliária)',
    periodo: 'Janeiro 2026 — Atual',
    stack: ['JavaScript', 'Node.js', 'PHP', 'MongoDB', 'PostgreSQL', 'IA aplicada ao dev'],
    destaques: [
      'Desenho e execução de scripts de migração de grandes volumes de dados (CRMs e sistemas financeiros), recebidos em XML, JSON, CSV e backups SQL/PostgreSQL, garantindo integridade no destino.',
      'Rotinas de ETL em Node.js para extração, transformação e carga de bases em XML, CSV e SQL.',
      'Mapeamento de campos e análise de consistência com SQL e scripts de validação antes do deploy em produção.',
      'Modelagem de dados de clientes em MongoDB para dashboards internos de métricas de qualidade.',
      'Uso de IA como apoio à refatoração de código e aceleração de entregas em prazos reduzidos.',
    ],
    atual: true,
  },
  {
    cargo: 'Desenvolvedor Front-End Pleno III',
    empresa: 'Apresenta.me (sistema de gestão imobiliária)',
    periodo: 'Abril 2025 — Janeiro 2026',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Figma', 'UI/UX'],
    destaques: [
      'Liderança interina das equipes de Web e Design, conduzindo code reviews e garantindo fidelidade entre protótipos no Figma e a implementação final.',
      'Conversão de layouts em interfaces responsivas integradas ao CRM da empresa, com componentes dinâmicos em Vue.js.',
      'Mentoria de desenvolvedores juniores em boas práticas de CSS moderno, arquitetura Front-End e regras de negócio do CRM.',
    ],
    atual: false,
  },
  {
    cargo: 'Analista de E-commerce / Editor de Mídia Audiovisual',
    empresa: 'Super Sonora — Instrumentos Musicais',
    periodo: '2022 — 2025',
    stack: ['ERP (Bling)', 'SEO', 'Google Merchant', 'Marketplaces', 'Marketing Digital'],
    destaques: [
      'Gestão de estoque, marketplaces e marketing digital, com otimização para mecanismos de busca (SEO, Google Search, blogs).',
      'Participação em duas migrações de plataforma do site próprio.',
      'Metas de venda de 2023 e 2024 concluídas, totalizando cerca de R$ 500 mil em liquidez.',
    ],
    atual: false,
  },
];

export const HABILIDADES: GrupoDeHabilidades[] = [
  {
    categoria: 'Linguagens & Runtimes',
    itens: ['JavaScript (ES6+)', 'Node.js', 'TypeScript', 'PHP'],
  },
  {
    categoria: 'Back-End & Arquitetura',
    itens: ['Express', 'Laravel', 'APIs REST', 'ETL & Migração de Dados', 'Supabase (BaaS)'],
  },
  {
    categoria: 'Front-End & Mobile',
    itens: ['React.js', 'React Native', 'Vue.js', 'Angular', 'HTML5', 'CSS3'],
  },
  {
    categoria: 'Bancos de Dados',
    itens: ['MongoDB', 'PostgreSQL', 'MySQL', 'phpMyAdmin'],
  },
  {
    categoria: 'Cloud & DevOps',
    itens: ['AWS (EC2, S3, RDS, IAM)', 'Docker', 'Kubernetes', 'noções de CI/CD'],
  },
  {
    categoria: 'Ferramentas & Design',
    itens: ['Git/GitHub', 'npm', 'Figma', 'Adobe Photoshop', 'UI/UX'],
  },
];

export const SOFT_SKILLS: string[] = [
  'Levantamento de requisitos e modelagem de dados',
  'Metodologias ágeis e visão de fluxo de entrega (Delivery)',
  'Liderança técnica e mentoria de times',
  'Visão de negócio (e-commerce, SEO e conversão)',
  'Comunicação assertiva e adaptabilidade a novas stacks',
];

export const FORMACAO: ItemFormacao[] = [
  {
    titulo: 'Bacharelado em Sistemas de Informação',
    instituicao: 'Unidavi',
    periodo: '2023 — previsão de conclusão em 2026',
  },
  {
    titulo: 'Ensino Fundamental e Médio Completos',
    instituicao: 'Colégio Salesiano Dom Bosco Rio do Sul',
    periodo: '2008 — 2021',
  },
];

export const CURSOS: CursoOuCertificacao[] = [
  {
    titulo: 'AWS Cloud Quest: Cloud Practitioner',
    instituicao: 'AWS',
    periodo: 'Junho 2026',
    descricao: 'Amazon RDS, AWS IAM e fundamentos de nuvem.',
  },
  {
    titulo: 'AWS Academy Graduate — Cloud Foundations',
    instituicao: 'AWS',
    periodo: 'Maio 2026',
    descricao: 'Amazon EC2, AWS e infraestrutura em nuvem.',
  },
  {
    titulo: 'React — Começando seu Projeto Full Stack',
    instituicao: 'Alura',
    periodo: 'Abril 2026',
    descricao: 'React.js aplicado a projetos Full Stack.',
  },
  {
    titulo: 'Node.js: Buscas, Filtros, Paginação e Erros em uma API',
    instituicao: 'Alura',
    periodo: 'Março 2026',
    descricao: 'APIs REST e migração de dados.',
  },
  {
    titulo: 'Node.js: criando uma API REST com Express e MongoDB',
    instituicao: 'Alura',
    periodo: 'Março 2026',
    descricao: 'Foco em back-end, npm e bancos NoSQL.',
  },
  {
    titulo: 'Formação Front-end: HTML, CSS, JS, React, TypeScript e +',
    instituicao: 'Udemy',
    periodo: 'Fevereiro 2026 · 50,5h',
    descricao: 'Trilha completa de front-end moderno.',
  },
  {
    titulo: 'Introdução à Gestão de Projetos',
    instituicao: 'Fundação Bradesco',
    periodo: 'Agosto 2025',
    descricao: 'EAP e gestão de software.',
  },
  {
    titulo: 'Curso de JavaScript Roger Melo (CJRM)',
    instituicao: 'Eduzz',
    periodo: 'Junho 2025',
    descricao: 'Lógica, POO e estrutura de dados.',
  },
];
