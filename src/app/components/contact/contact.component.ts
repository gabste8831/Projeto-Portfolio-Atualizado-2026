import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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

  emailCopiado = signal(false);

  readonly redes = [
    { rotulo: 'LinkedIn', href: this.perfil.linkedin, iconeClass: 'fa-brands fa-linkedin-in' },
    { rotulo: 'GitHub', href: this.perfil.github, iconeClass: 'fa-brands fa-github' },
    { rotulo: 'Instagram', href: this.perfil.instagram, iconeClass: 'fa-brands fa-instagram' },
  ];

  copiarEmail(): void {
    navigator.clipboard.writeText(this.perfil.email).then(() => {
      this.emailCopiado.set(true);
      setTimeout(() => this.emailCopiado.set(false), 1500);
    });
  }
}