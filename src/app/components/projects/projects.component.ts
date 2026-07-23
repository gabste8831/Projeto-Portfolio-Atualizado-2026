import { CommonModule } from '@angular/common';
import { Component, signal, computed, ViewChild, ElementRef } from '@angular/core';
import { PROJETOS, PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @ViewChild('viewport') viewport!: ElementRef<HTMLElement>;

  readonly projetos = PROJETOS;
  readonly perfil = PERFIL;

  indiceAtivo = signal(0);
  arrastando = signal(false);
  private arrastoPx = signal(0);

  private touchStartX = 0;
  private touchCurrentX = 0;

  trilhoTransform = computed(() => {
    const basePercent = -this.indiceAtivo() * 100;

    if (this.arrastando() && this.viewport?.nativeElement) {
      const viewportWidth = this.viewport.nativeElement.clientWidth || 1;
      const deltaPercent = (this.arrastoPx() / viewportWidth) * 100;
      return `translateX(${basePercent + deltaPercent}%)`;
    }

    return `translateX(${basePercent}%)`;
  });

  irPara(index: number): void {
    this.indiceAtivo.set(index);
  }

  proximo(): void {
    if (this.indiceAtivo() < this.projetos.length - 1) {
      this.indiceAtivo.update(i => i + 1);
    } else {
      this.indiceAtivo.set(0);
    }
  }

  anterior(): void {
    if (this.indiceAtivo() > 0) {
      this.indiceAtivo.update(i => i - 1);
    } else {
      this.indiceAtivo.set(this.projetos.length - 1);
    }
  }

  aoTocarInicio(event: TouchEvent): void {
    if (window.innerWidth > 790) return;
    this.touchStartX = event.touches[0].clientX;
    this.touchCurrentX = this.touchStartX;
    this.arrastando.set(true);
    this.arrastoPx.set(0);
  }

  aoTocarMover(event: TouchEvent): void {
    if (!this.arrastando()) return;
    this.touchCurrentX = event.touches[0].clientX;
    const deltaX = this.touchCurrentX - this.touchStartX;
    this.arrastoPx.set(deltaX);
  }

  aoTocarFim(): void {
    if (!this.arrastando()) return;

    const deltaX = this.arrastoPx();
    const limiteSensibilidade = 40;

    if (deltaX < -limiteSensibilidade) {
      this.proximo();
    } else if (deltaX > limiteSensibilidade) {
      this.anterior();
    }

    this.arrastando.set(false);
    this.arrastoPx.set(0);
  }
}