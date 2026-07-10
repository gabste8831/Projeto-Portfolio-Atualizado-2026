import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

/**
 * Diretiva `appReveal`.
 *
 * Reproduz o efeito clássico da Apple de "o texto sobe suavemente ao entrar
 * na tela": o elemento nasce com opacidade 0 e levemente deslocado (isso é
 * feito só em CSS, olhe `[appReveal]` em `styles.css`), e quando ele entra na
 * viewport a diretiva adiciona a classe `.is-visible`, que dispara a transição.
 *
 * Pontos de estudo:
 * - Uma diretiva de atributo é a forma idiomática do Angular de "anexar
 *   comportamento" a um elemento existente, sem criar um componente novo.
 *   Uso no template: `<div appReveal>...</div>`.
 * - `IntersectionObserver` é uma API nativa do browser (não é do Angular) que
 *   avisa quando um elemento entra/sai da área visível — muito mais barata
 *   que ficar calculando scroll manualmente.
 * - `ElementRef` dá acesso ao elemento DOM real por trás do componente/diretiva.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            // Uma vez revelado, não precisamos mais observar este elemento
            this.observer?.unobserve(entrada.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
