import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Rodapé minimalista, no espírito do rodapé da Apple: texto pequeno,
 * copyright e um link ou dois, nada além disso.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly anoAtual = new Date().getFullYear();
}
