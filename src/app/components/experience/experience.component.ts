import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EXPERIENCIAS } from '../../data/portfolio-data';
import { ExperienciaProfissional } from '../../models/portfolio-data.model';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Experiência" - timeline editorial (coluna de período + conteúdo).
 *
 * Para manter cada item conciso, só os 2 primeiros destaques aparecem por
 * padrão; o resto fica atrás de um "mostrar mais" controlado por um único
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

}