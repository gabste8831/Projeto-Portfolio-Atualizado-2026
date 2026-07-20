import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HABILIDADES, SOFT_SKILLS } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Skills".
 *
 * Cada tecnologia exibe seu logo oficial (via Simple Icons CDN, já com a
 * cor de marca), dentro do mesmo quadrado de linha fina usado no resto do
 * site — em escala de cinza por padrão, revelando a cor no hover. Itens
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
export class SkillsComponent {
  readonly grupos = HABILIDADES;
  readonly softSkills = SOFT_SKILLS;

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
    CSS3: 'css3',
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
}