import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CURSOS, FORMACAO, PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

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
  readonly perfil = PERFIL;
}