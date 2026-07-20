import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

/**
 * Navbar fixa, translúcida, no estilo apple.com - sempre com o mesmo fundo
 * escuro semitransparente (o "frosted glass"), independente do scroll.
 *
 * Pontos de estudo:
 * - Componente "standalone: true" não precisa de NgModule; ele declara
 *   diretamente quais outros módulos/diretivas usa em `imports`.
 * - `signal()` é a forma moderna (Angular 16+) de guardar estado reativo
 *   local. Ler o valor é uma chamada de função: `menuAberto()`.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly links = [
    { rotulo: 'Sobre', href: '#sobre' },
    { rotulo: 'Experiência', href: '#experiencia' },
    { rotulo: 'Skills', href: '#skills' },
    { rotulo: 'Formação', href: '#formacao' },
    { rotulo: 'Contato', href: '#contato' },
  ];

  /** Estado do menu mobile (aberto/fechado) */
  menuAberto = signal(false);
}
