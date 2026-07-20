import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { HABILIDADES, SOFT_SKILLS } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Skills".
 *
 * As categorias de tecnologia viram um carrossel (uma categoria visível por
 * vez) em vez de uma lista empilhada — isso é o que resolve a altura da
 * seção. O carrossel avança sozinho a cada 10s; qualquer navegação manual
 * (seta ou aba) reinicia essa contagem, pra não "brigar" com o usuário.
 *
 * Cada tecnologia exibe seu logo oficial (via Simple Icons CDN, já com a
 * cor de marca), dentro do mesmo quadrado de linha fina usado no resto do
 * site - em escala de cinza por padrão, revelando a cor no hover. Itens
 * sem logo de marca (conceitos como "APIs REST" ou "UI/UX") caem no
 * fallback de monograma tipográfico.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit, OnDestroy {
  readonly grupos = HABILIDADES;
  readonly softSkills = SOFT_SKILLS;

  /** Categoria atualmente visível no carrossel */
  readonly indiceAtivo = signal(0);

  private readonly intervaloMs = 10_000;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.iniciarAutoAvanco();
  }

  ngOnDestroy(): void {
    this.pararAutoAvanco();
  }

  proximo(): void {
    this.indiceAtivo.update((i) => (i + 1) % this.grupos.length);
    this.reiniciarAutoAvanco();
  }

  anterior(): void {
    this.indiceAtivo.update((i) => (i - 1 + this.grupos.length) % this.grupos.length);
    this.reiniciarAutoAvanco();
  }

  irPara(indice: number): void {
    this.indiceAtivo.set(indice);
    this.reiniciarAutoAvanco();
  }

  private iniciarAutoAvanco(): void {
    this.timer = setInterval(() => {
      this.indiceAtivo.update((i) => (i + 1) % this.grupos.length);
    }, this.intervaloMs);
  }

  private pararAutoAvanco(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  /** Chamado a cada interação manual, pra não avançar de novo logo em seguida */
  private reiniciarAutoAvanco(): void {
    this.pararAutoAvanco();
    this.iniciarAutoAvanco();
  }

  /** Monogramas curados para as tecnologias mais citadas; o restante cai no fallback */
  private readonly monogramas: Record<string, string> = {
    'JavaScript (ES6+)': 'JS',
    'Node.js': 'N',
    TypeScript: 'TS',
    PHP: 'PHP',
    Express: 'EX',
    Laravel: 'LV',
    'APIs REST': 'API',
    'ETL & Migração de Dados': 'ETL',
    'Supabase (BaaS)': 'SB',
    'React.js': 'R',
    'React Native': 'RN',
    'Vue.js': 'V',
    Angular: 'NG',
    HTML5: 'H5',
    CSS3: 'C3',
    MongoDB: 'MDB',
    PostgreSQL: 'PG',
    MySQL: 'SQL',
    phpMyAdmin: 'PMA',
    'AWS (EC2, S3, RDS, IAM)': 'AWS',
    Docker: 'DK',
    Kubernetes: 'K8S',
    'noções de CI/CD': 'CI',
    'Git/GitHub': 'GIT',
    npm: 'NPM',
    Figma: 'FIG',
    'Adobe Photoshop': 'PS',
    'UI/UX': 'UX',
  };

  /** Retorna o monograma de uma skill: usa a curadoria acima, ou cai num fallback automático */
  sigla(item: string): string {
    if (this.monogramas[item]) {
      return this.monogramas[item];
    }
    const primeiraPalavra = item.replace(/[^a-zA-Z ]/g, '').trim().split(' ')[0] ?? item;
    return primeiraPalavra.slice(0, 2).toUpperCase();
  }

  /** Slugs do Simple Icons (simpleicons.org) para as tecnologias com logo de marca */
  private readonly icones: Record<string, string> = {
    'JavaScript (ES6+)': 'javascript',
    'Node.js': 'nodedotjs',
    TypeScript: 'typescript',
    PHP: 'php',
    Express: 'express',
    Laravel: 'laravel',
    'Supabase (BaaS)': 'supabase',
    'React.js': 'react',
    'React Native': 'react',
    'Vue.js': 'vuedotjs',
    Angular: 'angular',
    HTML5: 'html5',
    CSS3: 'css',
    MongoDB: 'mongodb',
    PostgreSQL: 'postgresql',
    MySQL: 'mysql',
    phpMyAdmin: 'phpmyadmin',
    'AWS (EC2, S3, RDS, IAM)': 'amazonaws',
    Docker: 'docker',
    Kubernetes: 'kubernetes',
    'Git/GitHub': 'github',
    npm: 'npm',
    Figma: 'figma',
    'Adobe Photoshop': 'adobephotoshop',
  };

  /** Retorna a URL do ícone de marca (Simple Icons CDN) ou null se a skill não tiver um mapeado */
  iconeUrl(item: string): string | null {
    const slug = this.icones[item];
    return slug ? `https://cdn.simpleicons.org/${slug}` : null;
  }

  /** Itens cujo ícone falhou ao carregar (CDN fora do ar, bloqueio de adblocker etc.) */
  private readonly iconesQuebrados = new Set<string>();

  /** Chamado pelo (error) do <img>: registra a falha e força o fallback de monograma */
  aoErrarIcone(item: string): void {
    this.iconesQuebrados.add(item);
  }

  /** True quando devemos mostrar o ícone de marca (existe slug e ele carregou normalmente) */
  temIcone(item: string): boolean {
    return !!this.icones[item] && !this.iconesQuebrados.has(item);
  }
}