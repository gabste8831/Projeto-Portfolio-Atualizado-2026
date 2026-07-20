import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Hero - abertura editorial: tipografia (sans fina + uma palavra em serifa
 * itálica de destaque) à esquerda, foto em preto e branco com moldura
 * deslocada à direita. Minimalista de propósito: sem gráficos extras.
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly perfil = PERFIL;
}
