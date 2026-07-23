import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

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
