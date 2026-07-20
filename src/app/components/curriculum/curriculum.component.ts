import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CURSOS, FORMACAO, PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';


/**
 * Seção "Formação" - graduação/ensino formal à esquerda e um grid de cursos
 * e certificações complementares à direita.
 */
@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
})
export class CurriculumComponent {
  readonly formacao = FORMACAO;
  readonly cursos = CURSOS;
  readonly perfil = PERFIL;
}
