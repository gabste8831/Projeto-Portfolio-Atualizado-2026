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
}