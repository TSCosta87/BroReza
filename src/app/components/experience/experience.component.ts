import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatChipsModule],
  template: `
    <div class="experience-container">
      <h2 class="section-title">Experiência Profissional</h2>
      
      <mat-card class="experience-card">
        <mat-card-content>
          <div class="experience-item">
            <div class="experience-header">
              <h3>Engenheiro de Software</h3>
              <p class="company">Caixa Geral de Depósitos</p>
              <p class="period">mar de 2023 - Presente</p>
            </div>
            
            <div class="experience-description">
              <p>
                Desenvolvimento de aplicações web e mobile para o setor bancário.
                Implementação de soluções robustas e seguras utilizando tecnologias modernas.
              </p>
              
              <div class="tech-stack">
                <mat-chip-set>
                  <mat-chip>Laravel</mat-chip>
                  <mat-chip>Vue.js</mat-chip>
                  <mat-chip>Angular</mat-chip>
                  <mat-chip>Node.js</mat-chip>
                  <mat-chip>React</mat-chip>
                  <mat-chip>AWS</mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </div>

          <mat-divider></mat-divider>

          <div class="experience-item">
            <div class="experience-header">
              <h3>Desenvolvedor Full Stack</h3>
              <p class="company">Freelancer</p>
              <p class="period">2022 - 2023</p>
            </div>
            
            <div class="experience-description">
              <p>
                Desenvolvimento de soluções web personalizadas para diversos clientes.
                Criação de aplicações completas desde o backend até o frontend.
              </p>
              
              <div class="tech-stack">
                <mat-chip-set>
                  <mat-chip>PHP</mat-chip>
                  <mat-chip>JavaScript</mat-chip>
                  <mat-chip>HTML/CSS</mat-chip>
                  <mat-chip>MySQL</mat-chip>
                  <mat-chip>MongoDB</mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .experience-container {
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

    .experience-card {
      margin-bottom: 20px;
    }

    .experience-item {
      padding: 20px 0;
    }

    .experience-header {
      margin-bottom: 20px;

      h3 {
        font-size: 1.5em;
        color: #1976d2;
        margin-bottom: 5px;
      }

      .company {
        font-size: 1.1em;
        color: #666;
        margin-bottom: 5px;
      }

      .period {
        color: #888;
        font-size: 0.9em;
      }
    }

    .experience-description {
      p {
        line-height: 1.6;
        color: #444;
        margin-bottom: 15px;
      }
    }

    .tech-stack {
      margin-top: 15px;
    }

    mat-chip {
      background-color: #e3f2fd !important;
      color: #1976d2 !important;
    }

    mat-divider {
      margin: 20px 0;
    }

    @media (max-width: 768px) {
      .experience-container {
        padding: 0 15px;
      }

      .section-title {
        font-size: 1.5em;
      }

      .experience-header h3 {
        font-size: 1.2em;
      }
    }
  `]
})
export class ExperienceComponent {} 