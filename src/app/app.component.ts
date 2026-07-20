import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
/**
 * Componente raiz.
 *
 * Repare que este componente não tem quase nenhuma lógica: seu único
 * trabalho é orquestrar a ordem das seções da página, cada uma isolada em
 * seu próprio componente standalone (com seu próprio HTML/CSS/TS). Essa é
 * a espinha dorsal da "árvore de componentes" do Angular.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent { }
