import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { HABILIDADES, SOFT_SKILLS } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

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

  readonly indiceAtivo = signal(0);

  @ViewChild('viewport') viewportRef!: ElementRef<HTMLElement>;
  readonly arrastando = signal(false);
  readonly arrastoPercentual = signal(0);
  private touchStartX = 0;
  private larguraViewport = 0;
  private readonly limiarSwipe = 18;

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

  aoTocarInicio(evento: TouchEvent): void {
    this.pararAutoAvanco();
    this.touchStartX = evento.touches[0].clientX;
    this.larguraViewport = this.viewportRef.nativeElement.offsetWidth;
    this.arrastando.set(true);
  }

  aoTocarMover(evento: TouchEvent): void {
    if (!this.arrastando()) return;
    const deltaX = evento.touches[0].clientX - this.touchStartX;
    this.arrastoPercentual.set((deltaX / this.larguraViewport) * 100);
  }

  aoTocarFim(): void {
    if (!this.arrastando()) return;
    const percentual = this.arrastoPercentual();

    if (percentual <= -this.limiarSwipe) {
      this.proximo();
    } else if (percentual >= this.limiarSwipe) {
      this.anterior();
    } else {
      this.reiniciarAutoAvanco();
    }

    this.arrastando.set(false);
    this.arrastoPercentual.set(0);
  }

  deslocamento(): number {
    return -(this.indiceAtivo() * 100) + this.arrastoPercentual();
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

  private reiniciarAutoAvanco(): void {
    this.pararAutoAvanco();
    this.iniciarAutoAvanco();
  }

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
    'Noções de CI/CD': 'CI',
    'Git/GitHub': 'GIT',
    npm: 'NPM',
    Figma: 'FIG',
    'Adobe Photoshop': 'PS',
    'UI/UX': 'UX',
  };

  sigla(item: string): string {
    if (this.monogramas[item]) {
      return this.monogramas[item];
    }
    const primeiraPalavra = item.replace(/[^a-zA-Z ]/g, '').trim().split(' ')[0] ?? item;
    return primeiraPalavra.slice(0, 2).toUpperCase();
  }

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

  iconeUrl(item: string): string | null {
    const slug = this.icones[item];
    return slug ? `https://cdn.simpleicons.org/${slug}` : null;
  }

  private readonly iconesQuebrados = new Set<string>();

  aoErrarIcone(item: string): void {
    this.iconesQuebrados.add(item);
  }

  temIcone(item: string): boolean {
    return !!this.icones[item] && !this.iconesQuebrados.has(item);
  }
}