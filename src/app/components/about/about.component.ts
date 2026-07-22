import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Sobre" - objetivo profissional em destaque (parágrafo grande, estilo
 * Apple), uma pequena lista de fatos rápidos ao lado, e uma faixa de redes
 * sociais/contato logo abaixo - com o logo de marca de cada rede (colorido,
 * ao contrário do resto do site que é monocromático - aqui foi um pedido
 * explícito, então mantemos as cores oficiais de cada marca).
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly perfil = PERFIL;

  readonly objetivo =
    'Atuar como desenvolvedor, aplicando princípios de engenharia de software na criação ' +
    'de soluções, desde interfaces à estruturas de hospedagem. Busco alinhar a parte ' +
    'técnica à visão estratégica de negócio, e assim evoluir na carreira em tecnologia.';

  readonly fatos = [
    { rotulo: 'localização', valor: this.perfil.localizacao },
    { rotulo: 'idade', valor: `${this.perfil.idade} anos` },
    { rotulo: 'atuação', valor: 'Back-end · Node.js · ETL' },
  ];

  /**
   * Redes exibidas na faixa "Redes & contato". `icone` é o slug do Simple
   * Icons (simpleicons.org/cdn) - null pro e-mail, que não tem um logo de
   * marca (aí o template cai no ícone de envelope genérico embutido).
   */
  readonly redes = [
    { rotulo: 'LinkedIn', href: this.perfil.linkedin, icone: 'linkedin', externo: true },
    { rotulo: 'GitHub', href: this.perfil.github, icone: 'github', externo: true },
    { rotulo: 'Instagram', href: this.perfil.instagram, icone: 'instagram', externo: true },
    { rotulo: 'E-mail', href: `mailto:${this.perfil.email}`, icone: null, externo: false },
  ];

  /** Slugs cujo ícone falhou ao carregar (CDN fora do ar, adblocker etc.) */
  private readonly iconesQuebrados = new Set<string>();

  /** URL do logo de marca (Simple Icons CDN), já na cor oficial da marca */
  iconeUrl(slug: string): string {
    return `https://cdn.simpleicons.org/${slug}`;
  }

  aoErrarIcone(slug: string): void {
    this.iconesQuebrados.add(slug);
  }

  temIconeCarregado(slug: string | null): boolean {
    return !!slug && !this.iconesQuebrados.has(slug);
  }
}