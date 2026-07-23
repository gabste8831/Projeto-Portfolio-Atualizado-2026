import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

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
    { rotulo: 'Projetos', href: '#projetos' },
    { rotulo: 'Formação', href: '#formacao' },
    { rotulo: 'Contato', href: '#contato' },
  ];

  menuAberto = signal(false);
}
