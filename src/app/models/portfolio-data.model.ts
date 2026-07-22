/**
 * Modelos de dados do portfólio.
 *
 * Centralizar as "formas" dos dados aqui (interfaces) é uma boa prática em
 * Angular/TypeScript: os componentes não precisam saber de onde os dados vêm,
 * apenas que formato eles têm. Isso facilita trocar a fonte de dados no futuro
 * (ex: buscar de uma API) sem alterar os componentes que exibem a informação.
 */

export interface PerfilPessoal {
  nome: string;
  cargoObjetivo: string;
  localizacao: string;
  idade: number;
  email: string;
  telefone: string;
  /** Link "tel:" já limpo (só dígitos e o +55), pronto pro atributo href */
  telefoneHref: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  instagram: string;
  resumo: string[];
  /** Caminho da foto de perfil usada no Hero (dentro de /public) */
  foto: string;
  /** Caminho do logotipo usado na navbar (dentro de /public) */
  logoUrl: string;
  /** Caminho do PDF do currículo (dentro de /public) */
  curriculoUrl: string;
  /** Nome do arquivo sugerido ao baixar o currículo (atributo `download`) */
  curriculoNomeArquivo: string;
}

export interface ExperienciaProfissional {
  cargo: string;
  empresa: string;
  periodo: string;
  stack: string[];
  destaques: string[];
  /** Marca a experiência mais recente para dar ênfase visual */
  atual: boolean;
}

export interface GrupoDeHabilidades {
  categoria: string;
  itens: string[];
}

export interface ItemFormacao {
  titulo: string;
  instituicao: string;
  periodo: string;
}

export interface CursoOuCertificacao {
  titulo: string;
  instituicao: string;
  periodo: string;
  descricao: string;
}

/** Nó do diagrama de pipeline exibido no Hero (representa o fluxo de ETL) */
export interface NoPipeline {
  id: string;
  rotulo: string;
  x: number;
  y: number;
}

/** Item da lista de "fatos rápidos" exibida ao lado do objetivo, na seção Sobre */
export interface FatoRapido {
  rotulo: string;
  valor: string;
}

/** Projeto em destaque na seção "Projetos" (repositórios com deploy) */
export interface ProjetoPortfolio {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  /** URL do repositório no GitHub */
  repoUrl: string;
  /** URL da aplicação publicada; omitir quando não houver deploy público */
  deployUrl?: string;
  imagem: string;
}