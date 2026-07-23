import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

/**
 * Seção "Contato" - CTA final, agora dividido em duas frentes: projeto
 * freelance e oportunidade profissional (CLT/PJ). O e-mail é o mesmo nos
 * dois casos; só o assunto pré-preenchido muda, pra já chegar contextualizado.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly perfil = PERFIL;

  /** Monta um link mailto com assunto pré-preenchido, pra cada tipo de contato */
  mailtoComAssunto(assunto: string): string {
    return `mailto:${this.perfil.email}?subject=${encodeURIComponent(assunto)}`;
  }

  /**
 * Redes exibidas na faixa "Redes & contato". `icone` é o slug do Simple
 * Icons (simpleicons.org/cdn) - null pro e-mail, que não tem um logo de
 * marca (aí o template cai no ícone de envelope genérico embutido).
 */
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