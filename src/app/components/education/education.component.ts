import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CURSOS, FORMACAO } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Formação" — graduação/ensino formal à esquerda e um grid de cursos
 * e certificações complementares à direita.
 */
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  readonly formacao = FORMACAO;
  readonly cursos = CURSOS;
}
