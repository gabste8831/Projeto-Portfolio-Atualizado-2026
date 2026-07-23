import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EXPERIENCIAS } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly experiencias = EXPERIENCIAS;

  indiceExpandido = signal<number | null>(null);

  toggleDetalhes(index: number): void {
    if (this.indiceExpandido() === index) {
      this.indiceExpandido.set(null);
    } else {
      this.indiceExpandido.set(index);
    }
  }
}