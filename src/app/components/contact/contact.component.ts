import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="contact-container">
      <h2 class="section-title">Contato</h2>

      <div class="contact-content">
        <mat-card class="contact-card">
          <mat-card-content>
            <div class="contact-grid">
              <div class="contact-item">
                <mat-icon>email</mat-icon>
                <h3>Email</h3>
                <p>tiago.sousa.costa.87&#64;gmail.com</p>
                <a mat-button href="mailto:tiago.sousa.costa.87&#64;gmail.com">
                  ENVIAR EMAIL
                </a>
              </div>

              <div class="contact-item">
                <mat-icon>linkedin</mat-icon>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/t-s-costa</p>
                <a mat-button href="https://www.linkedin.com/in/t-s-costa/" target="_blank">
                  CONECTAR
                </a>
              </div>

              <div class="contact-item">
                <mat-icon>code</mat-icon>
                <h3>GitHub</h3>
                <p>github.com/tiagocosta</p>
                <a mat-button href="https://github.com/tiagocosta" target="_blank">
                  VER PROJETOS
                </a>
              </div>
            </div>

            <div class="location-info">
              <mat-icon>location_on</mat-icon>
              <p>Localização: Lisboa, Portugal</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
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

    .contact-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .contact-card {
      padding: 20px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 30px;
    }

    .contact-item {
      text-align: center;
      padding: 20px;

      mat-icon {
        font-size: 2.5em;
        height: 50px;
        width: 50px;
        color: #1976d2;
      }

      h3 {
        margin: 15px 0;
        color: #333;
      }

      p {
        color: #666;
        margin-bottom: 15px;
      }

      a {
        color: #1976d2;
      }
    }

    .location-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
      color: #666;

      mat-icon {
        color: #1976d2;
      }
    }

    @media (max-width: 768px) {
      .contact-container {
        padding: 0 15px;
      }

      .section-title {
        font-size: 1.5em;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {} 