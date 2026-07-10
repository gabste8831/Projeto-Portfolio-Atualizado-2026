import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HABILIDADES, SOFT_SKILLS } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Skills".
 *
 * Em vez de ícones/logos de marca (que são propriedade de terceiros), cada
 * tecnologia ganha um "logotipo" minimalista próprio: um monograma de 1-2
 * letras dentro de um quadrado de linha fina — um tratamento tipográfico,
 * não uma cópia de marca — mantendo a pegada monocromática do resto do site.
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
}
