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
    'Atuar como Desenvolvedor Full Stack, aplicando princípios de engenharia de software na criação ' +
    'de soluções ponta a ponta — de interfaces à estruturação de hospedagem. Busco alinhar a parte ' +
    'técnica à visão estratégica de negócio, mirando, a longo prazo, a coordenação técnica.';

  readonly fatos = [
    { rotulo: 'localização', valor: this.perfil.localizacao },
    { rotulo: 'idade', valor: `${this.perfil.idade} anos` },
    { rotulo: 'foco atual', valor: 'Back-end · Node.js · ETL' },
    { rotulo: 'objetivo', valor: 'Full Stack → coordenação técnica' },
  ];
}
