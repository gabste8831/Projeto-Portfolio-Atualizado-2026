import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PERFIL } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent {
  readonly perfil = PERFIL;

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
