import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PERFIL, PROJETOS } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Projetos".
 *
 * Mostra em grid os repositórios que estão publicados/em deploy (o array
 * `PROJETOS` em `data/portfolio-data.ts`). Como nem todo projeto tem uma URL
 * de deploy pública, o botão "Ver ao vivo" só aparece quando `deployUrl`
 * existe (`*ngIf`) - o card sempre tem, no mínimo, o link do repositório.
 *
 * Abaixo do grid há uma nota explicando que estes são só os projetos
 * publicados, e um botão que leva ao perfil completo do GitHub, onde ficam
 * os demais repositórios (acadêmicos, estudos, etc.).
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly projetos = PROJETOS;
  readonly perfil = PERFIL;
}
