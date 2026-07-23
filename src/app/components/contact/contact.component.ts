import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})

export class ContactComponent {
  readonly perfil = PERFIL;

  readonly redes = [
    {
      rotulo: 'LinkedIn',
      href: this.perfil.linkedin,
      iconeClass: 'fa-brands fa-linkedin-in',
      externo: true
    },
    {
      rotulo: 'GitHub',
      href: this.perfil.github,
      iconeClass: 'fa-brands fa-github',
      externo: true
    },
    {
      rotulo: 'Instagram',
      href: this.perfil.instagram,
      iconeClass: 'fa-brands fa-instagram',
      externo: true
    },
    {
      rotulo: 'E-mail',
      href: `mailto:${this.perfil.email}`,
      iconeClass: 'fa-solid fa-envelope',
      externo: false
    },
  ];
}