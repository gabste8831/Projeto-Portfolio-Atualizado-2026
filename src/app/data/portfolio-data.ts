import {
  CursoOuCertificacao,
  ExperienciaProfissional,
  FatoRapido,
  GrupoDeHabilidades,
  ItemFormacao,
  PerfilPessoal,
  ProjetoPortfolio,
} from '../models/portfolio-data.model';

export const PERFIL: PerfilPessoal = {
  nome: 'Gabriel Steffens',
  cargoObjetivo: 'Desenvolvedor Full Stack',
  localizacao: 'Rio do Sul, SC',
  idade: 22,
  email: 'gabrielsteffens2003@gmail.com',
  telefone: '(47) 9 8831-3652',
  telefoneHref: 'tel:+5547988313652',
  whatsapp: 'https://wa.me/5547988313652',
  linkedin: 'https://www.linkedin.com/in/gabriel-steffens-/',
  github: 'https://github.com/gabste8831',
  instagram: 'https://www.instagram.com/gabss.dev',
  foto: '/gabriel.jpg',
  logoUrl: '/logo_gabdev_2.svg',
  curriculoUrl: '/Gabriel Steffens Currículo 2026.pdf',
  curriculoNomeArquivo: 'Curriculo_Gabriel_Steffens.pdf',
  resumo: [
    `Prazer, Gabriel Steffens!`,
    `Sou dev full-stack, atualmente focado em arquiteturas Node.js e JavaScript pela Apresenta.me, onde atuo diretamente em processos de migração, modelagem e análise de dados.`,
    `Estou na 8ª fase da graduação em Sistemas de Informação. Já fui dev front-end e somo mais de 3 anos de vivência com SEO, marketing digital e análise de comércio digital.`
  ]
};

export const OBJETIVO_PROFISSIONAL =
  'Atuar como desenvolvedor, aplicando princípios de engenharia de software na criação ' +
  'de soluções, desde interfaces à estruturas de hospedagem. Busco alinhar a parte ' +
  'técnica à visão estratégica de negócio, e assim evoluir na carreira em tecnologia.';

export const FATOS_RAPIDOS: FatoRapido[] = [
  { rotulo: 'localização', valor: PERFIL.localizacao },
  { rotulo: 'idade', valor: `${PERFIL.idade} anos` },
  { rotulo: 'atuação', valor: 'Back-end · Node.js · ETL' },
];

export const EXPERIENCIAS: ExperienciaProfissional[] = [
  {
    cargo: 'Desenvolvedor Back-End - Migração de Dados',
    empresa: 'Apresenta.me - Sistema para Gestão Imobiliária',
    periodo: 'Jan 2026 - Hoje',
    stack: ['JavaScript', 'Node.js', 'PHP', 'MongoDB', 'PostgreSQL', 'IA aplicada ao dev'],
    destaques: [
      'Execução de scripts de migração de grandes volumes de dados (CRMs e sistemas financeiros), recebidos em XML, JSON, CSV e backups SQL/PostgreSQL.',
      'Rotinas de ETL em Node.js para extração, transformação e carga de bases de dados',
      'Mapeamento e análise de campos para validação, testes e deploy em produção.',
      'Uso de IA como apoio à refatoração de código e aceleração de entregas.',
    ],
    atual: true,
  },
  {
    cargo: 'Desenvolvedor Front-End Pleno III',
    empresa: 'Apresenta.me - Sistema para Gestão Imobiliária',
    periodo: 'Abr 2025 - Jan 2026',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Figma', 'UI/UX'],
    destaques: [
      'Conversão de layouts em interfaces responsivas integradas ao CRM da empresa. + de 80 sites desenvolvidos',
      'Mentoria de desenvolvedores juniores em boas práticas de CSS moderno, arquitetura Front-End e regras de negócio do CRM.',
      'Liderança interina das equipes de Web e Design, conduzindo code reviews e garantindo fidelidade entre protótipos no Figma e a implementação final.',
    ],
    atual: false,
  },
  {
    cargo: 'Analista de E-commerce / Editor de Mídia Audiovisual',
    empresa: 'Super Sonora - Instrumentos Musicais',
    periodo: '2022 - 2025',
    stack: ['ERP (Bling)', 'SEO', 'Google Merchant', 'Marketplaces', 'Marketing Digital'],
    destaques: [
      'Gestão de estoque, marketplaces e marketing digital, com otimização para mecanismos de busca (SEO, Google Search, blogs).',
      'Participação em duas migrações de plataforma do site próprio.',
      'Experiência prática em múltiplas áreas relacionadas ao fluxo de trabalho de um e-commerce.',
    ],
    atual: false,
  },
];

export const PROJETOS: ProjetoPortfolio[] = [
  {
    titulo: 'Site TR Transportes',
    descricao: 'Landing page institucional para uma empresa de transporte de cargas, com informações sobre a empresa, serviços, contato e formulário de orçamento.',
    tecnologias: ['Next.js', 'TypeScript', 'CSS', 'React'],
    repoUrl: `${PERFIL.github}/Tr-Transportes-Landing-Page`,
    deployUrl: 'https://tr-transportes-landing-page.vercel.app',
    imagem: '/Site_TR_Transportes.png',
  },
  {
    titulo: 'Site Rio Clube Handebol',
    descricao: 'Landing page institucional para o time oficial de handebol de Rio do Sul - SC, com histórico do projeto, treinos, galeria de fotos, apoiadores e feed do Instagram.',
    tecnologias: ['Next.js', 'TypeScript', 'CSS', 'React'],
    repoUrl: `${PERFIL.github}/Institucional-Rio-Clube-Handebol---Landing-Page`,
    deployUrl: 'https://rioclubehandebol.vercel.app',
    imagem: '/Site_Handebol.png',
  },
  {
    titulo: 'Plataforma FreelaCloud',
    descricao: 'Plataforma desenvolvida para conectar profissionais autônomos a clientes que precisam de serviços - Projeto acadêmico.',
    tecnologias: ['Next.js', 'Tailwind', 'PostgreSQL', 'Prisma', 'Javascript', 'Docker'],
    repoUrl: `${PERFIL.github}/Plataforma-Freelancers-com-NextJS-e-Docker`,
    imagem: '/FreelaCloud.png',
  },
  {
    titulo: 'InsuGuia Mobile',
    descricao: 'Aplicativo como protótipo de um sistema de suporte à decisão clínica (CDSS) no manejo de pacientes internados não-críticos com diabetes - Projeto acadêmico.',
    tecnologias: ['Flutter', 'Dart', 'SQLite', 'Figma'],
    repoUrl: `${PERFIL.github}/InsuGuia-project`,
    imagem: '/Insuguia.png',
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
    periodo: '2023 - previsão de conclusão em 2026',
  },
  {
    titulo: 'Ensino Fundamental e Médio Completos',
    instituicao: 'Colégio Salesiano Dom Bosco Rio do Sul',
    periodo: '2008 - 2021',
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
    titulo: 'AWS Academy Graduate - Cloud Foundations',
    instituicao: 'AWS',
    periodo: 'Maio 2026',
    descricao: 'Amazon EC2, AWS e infraestrutura em nuvem.',
  },
  {
    titulo: 'React - Começando seu Projeto Full Stack',
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
];