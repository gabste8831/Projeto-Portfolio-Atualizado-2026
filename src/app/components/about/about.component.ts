import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Sobre" — objetivo profissional em destaque (parágrafo grande, estilo
 * Apple) e uma pequena lista de fatos rápidos ao lado.
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
}
