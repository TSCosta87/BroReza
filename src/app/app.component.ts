import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  template: `
    <div class="app-container">
      <!-- Desktop navbar -->
      <mat-toolbar color="primary" class="navbar desktop-nav">
        <a routerLink="/home" class="brand">Tiago Costa</a>
        <span class="spacer"></span>
        <nav class="nav-links">
          <a mat-button routerLink="/home" routerLinkActive="active" class="nav-item">
            <mat-icon>person</mat-icon>
            About
          </a>
          <a mat-button routerLink="/experience" routerLinkActive="active" class="nav-item">
            <mat-icon>work</mat-icon>
            Experience
          </a>
          <a mat-button routerLink="/projects" routerLinkActive="active" class="nav-item">
            <mat-icon>code</mat-icon>
            Projects
          </a>
          <a mat-button routerLink="/contact" routerLinkActive="active" class="nav-item">
            <mat-icon>contact_mail</mat-icon>
            Contact
          </a>
        </nav>
      </mat-toolbar>

      <!-- Mobile navbar with hamburger menu -->
      <mat-toolbar color="primary" class="navbar mobile-nav">
        <button mat-icon-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
        <a routerLink="/home" class="brand">Tiago Costa</a>
      </mat-toolbar>

      <!-- Mobile sidenav -->
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="over" class="sidenav">
          <mat-nav-list>
            <a mat-list-item routerLink="/home" routerLinkActive="active" (click)="sidenav.close()">
              <mat-icon>person</mat-icon>
              <span>About</span>
            </a>
            <a mat-list-item routerLink="/experience" routerLinkActive="active" (click)="sidenav.close()">
              <mat-icon>work</mat-icon>
              <span>Experience</span>
            </a>
            <a mat-list-item routerLink="/projects" routerLinkActive="active" (click)="sidenav.close()">
              <mat-icon>code</mat-icon>
              <span>Projects</span>
            </a>
            <a mat-list-item routerLink="/contact" routerLinkActive="active" (click)="sidenav.close()">
              <mat-icon>contact_mail</mat-icon>
              <span>Contact</span>
            </a>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content>
          <main>
            <router-outlet></router-outlet>
          </main>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .brand {
      font-size: 1.5em;
      font-weight: 300;
      letter-spacing: 0.5px;
      text-decoration: none;
      color: white;
      cursor: pointer;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .nav-links {
      display: flex;
      gap: 10px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0 15px;
      height: 64px;
      transition: all 0.3s ease;
      text-decoration: none;
      color: white;

      mat-icon {
        margin-right: 5px;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .active {
      background-color: rgba(255, 255, 255, 0.1);
      border-bottom: 3px solid white;
    }

    .mobile-nav {
      display: none;
    }

    .sidenav-container {
      flex: 1;
      margin-top: 64px;
    }

    .sidenav {
      width: 250px;
      padding-top: 20px;
    }

    mat-nav-list {
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px 20px;

        mat-icon {
          margin-right: 10px;
        }
      }
    }

    main {
      min-height: calc(100vh - 64px);
      padding: 20px;
    }

    @media (max-width: 768px) {
      .desktop-nav {
        display: none;
      }

      .mobile-nav {
        display: flex;
      }

      .sidenav-container {
        margin-top: 56px;
      }

      main {
        min-height: calc(100vh - 56px);
      }
    }
  `]
})
export class AppComponent {
  title = 'Tiago Costa - Software Engineer';

  toggleSidenav() {
    const sidenav = document.querySelector('mat-sidenav') as any;
    if (sidenav) {
      sidenav.toggle();
    }
  }
}
