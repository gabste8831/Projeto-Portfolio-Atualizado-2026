import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EXPERIENCIAS } from '../../data/portfolio-data';
// import { ExperienciaProfissional } from '../../models/portfolio-data.model';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Experiência" - timeline editorial (coluna de período + conteúdo).
 *
 * Para manter cada item conciso, os destaques ficam ocultos por
 * padrão atrás de um botão "Ver detalhes" controlado por um único
 * signal (`indiceExpandido`) guardando QUAL item está aberto - nunca mais
 * de um por vez, o que evita a seção inteira virando uma parede de texto.
 */
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly experiencias = EXPERIENCIAS;

  // Guarda o índice do item que está com os detalhes abertos. null = todos fechados.
  indiceExpandido = signal<number | null>(null);

  toggleDetalhes(index: number): void {
    if (this.indiceExpandido() === index) {
      this.indiceExpandido.set(null); // Se já está aberto, fecha
    } else {
      this.indiceExpandido.set(index); // Abre o novo item (e fecha o anterior automaticamente)
    }
  }
}