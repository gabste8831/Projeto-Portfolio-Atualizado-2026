import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCIAS } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Experiência" — trajetória profissional em formato de timeline.
 * Os dados já vêm prontos de `portfolio-data.ts`; o componente só exibe.
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
}
