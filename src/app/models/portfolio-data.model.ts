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
  linkedin: string;
  github: string;
  resumo: string;
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
