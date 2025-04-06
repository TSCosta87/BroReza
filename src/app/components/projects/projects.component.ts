import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <div class="projects-container">
      <h2 class="section-title">Projetos</h2>

      <div class="projects-grid">
        <mat-card class="project-card">
          <img mat-card-image src="assets/project1.jpg" alt="Project 1">
          <mat-card-header>
            <mat-card-title>Sistema de Gestão</mat-card-title>
            <mat-card-subtitle>Aplicação Web Full Stack</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>
              Sistema completo de gestão empresarial desenvolvido com Laravel no backend
              e Vue.js no frontend. Inclui módulos de gestão de usuários, relatórios e dashboard.
            </p>
            <div class="tech-stack">
              <mat-chip-set>
                <mat-chip>Laravel</mat-chip>
                <mat-chip>Vue.js</mat-chip>
                <mat-chip>MySQL</mat-chip>
              </mat-chip-set>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button href="https://github.com/seu-usuario/projeto1" target="_blank">
              <mat-icon>code</mat-icon>
              CÓDIGO
            </a>
            <a mat-button href="https://demo-projeto1.com" target="_blank">
              <mat-icon>launch</mat-icon>
              DEMO
            </a>
          </mat-card-actions>
        </mat-card>

        <mat-card class="project-card">
          <img mat-card-image src="assets/project2.jpg" alt="Project 2">
          <mat-card-header>
            <mat-card-title>E-commerce</mat-card-title>
            <mat-card-subtitle>Loja Virtual</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>
              Plataforma de e-commerce desenvolvida com Angular no frontend e Laravel
              no backend. Inclui sistema de pagamentos, carrinho de compras e área administrativa.
            </p>
            <div class="tech-stack">
              <mat-chip-set>
                <mat-chip>Angular</mat-chip>
                <mat-chip>Laravel</mat-chip>
                <mat-chip>PostgreSQL</mat-chip>
              </mat-chip-set>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button href="https://github.com/seu-usuario/projeto2" target="_blank">
              <mat-icon>code</mat-icon>
              CÓDIGO
            </a>
            <a mat-button href="https://demo-projeto2.com" target="_blank">
              <mat-icon>launch</mat-icon>
              DEMO
            </a>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .section-title {
      font-size: 2em;
      color: #333;
      margin-bottom: 30px;
      text-align: center;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      padding: 20px 0;
    }

    .project-card {
      height: 100%;
      display: flex;
      flex-direction: column;

      img {
        height: 200px;
        object-fit: cover;
      }

      mat-card-content {
        flex-grow: 1;
      }

      p {
        color: #666;
        line-height: 1.6;
        margin: 15px 0;
      }
    }

    .tech-stack {
      margin: 15px 0;
    }

    mat-chip {
      background-color: #e3f2fd !important;
      color: #1976d2 !important;
    }

    mat-card-actions {
      display: flex;
      justify-content: space-around;
      padding: 16px;

      a {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    @media (max-width: 768px) {
      .projects-container {
        padding: 0 15px;
      }

      .section-title {
        font-size: 1.5em;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {} 