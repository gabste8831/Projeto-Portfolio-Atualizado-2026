export interface PerfilPessoal {
  nome: string;
  cargoObjetivo: string;
  localizacao: string;
  idade: number;
  email: string;
  telefone: string;
  telefoneHref: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  instagram: string;
  resumo: string[];
  foto: string;
  logoUrl: string;
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

export interface FatoRapido {
  rotulo: string;
  valor: string;
}

export interface ProjetoPortfolio {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  repoUrl: string;
  deployUrl?: string;
  imagem: string;
}