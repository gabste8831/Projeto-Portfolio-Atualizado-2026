/**
 * Fonte única de dados do portfólio.
 *
 * Em vez de espalhar textos soltos dentro dos templates HTML, todo o conteúdo
 * "de negócio" (currículo do Gabriel) mora aqui, tipado pelas interfaces em
 * `models/portfolio-data.model.ts`. Cada componente injeta este arquivo (ou
 * futuramente um serviço) e apenas renderiza. Isso é o mesmo princípio de
 * separar dados/ETL da camada de apresentação - algo que o próprio Gabriel
 * aplica no trabalho dele.
 */
import {
  CursoOuCertificacao,
  ExperienciaProfissional,
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
  linkedin: 'https://www.linkedin.com/in/gabriel-steffens',
  github: 'https://github.com/gabste8831',
  resumo: [
    `Prazer, Gabriel Steffens!`,
    `Sou dev full-stack, atualmente focado em arquiteturas Node.js e JavaScript pela Apresenta.me, onde atuo diretamente em processos de migração, modelagem e análise de dados.`,
    `Estou na 8ª fase da graduação em Sistemas de Informação. Já fui dev front-end e somo mais de 3 anos de vivência com SEO, marketing digital e análise de comércio digital.`
  ]
};

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

/**
 * Projetos em destaque (com deploy) exibidos na seção "Projetos".
 * ATENÇÃO Gabriel: os 3 itens abaixo são placeholders de exemplo - troque
 * título, descrição, tecnologias e URLs pelos seus projetos reais.
 */
export const PROJETOS: ProjetoPortfolio[] = [
  {
    titulo: 'Site TR Transportes',
    descricao: 'Landing page institucional para uma empresa de transporte, construída a partir de design gerado no Google Stitch, com formulário de contato integrado ao Formspree.',
    tecnologias: ['Next.js', 'TypeScript', 'CSS', 'React'],
    repoUrl: `${PERFIL.github}/Tr-Transportes-Landing-Page`,
    deployUrl: 'https://tr-transportes-landing-page.vercel.app',
  },
  {
    titulo: 'Rio Clube Handebol',
    descricao: 'Landing page institucional para um time de handebol de Rio do Sul/SC, com histórico do projeto, treinos, galeria de fotos, apoiadores e feed do Instagram.',
    tecnologias: ['Next.js', 'TypeScript', 'CSS', 'React'],
    repoUrl: `${PERFIL.github}/Institucional-Rio-Clube-Handebol---Landing-Page`,
    deployUrl: 'https://rioclubehandebol.vercel.app',
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
