import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  providers: [ScrollService],
  animations: [
    trigger('fadeInOnScroll', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="home-container">
      <div id="hero" class="hero-section section">
        <div class="profile-info">
          <div class="profile-image">
            <img src="assets/images/profile.png" alt="Tiago Costa" />
          </div>
          <div class="title-block">
            <h1>{{ '{' }} Tiago Costa {{ '}' }}</h1>
            <h2 class="roles">[ Electronics | Software Developer | Data Science ]</h2>
            <p class="location">Porto, Portugal</p>
            <p class="contact-info">
              <span>+351 914374242</span> |
              <a [href]="'mailto:tiago.sousa.costa.87@gmail.com'">tiago.sousa.costa.87&#64;gmail.com</a>
            </p>
            <div class="social-links">
              <a mat-icon-button href="https://github.com/TSCosta87" target="_blank" class="social-link github">
                <mat-icon svgIcon="github"></mat-icon>
              </a>
              <a mat-icon-button href="https://linkedin.com/in/t-s-costa" target="_blank" class="social-link linkedin">
                <mat-icon svgIcon="linkedin"></mat-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="bio">
          <p>Although my academic background was in electronics, I started my professional career as a computer technician. Currently, I'm working towards a career upgrade in software development. I want to use my skills to contribute to projects that promote business growth. This will help me expand my professional horizons and make a valuable contribution to the organization.</p>
        </div>
      </div>

      <div id="experience" class="experience-section section">
        <mat-card>
          <mat-card-header>
            <mat-card-title>&lt; Experience /&gt;</mat-card-title>
          </mat-card-header>
          <div class="carousel-container">
            <button class="nav-button prev" (click)="scrollCarousel('experience', 'left')">❮</button>
            <mat-card-content class="experience-grid">
              <div class="experience-card">
                <div class="card-front">
                  <h3>Junior Software Engineer</h3>
                  <p class="company">DreamDeal Technology</p>
                  <p class="period">2025 - Present</p>
                </div>
                <div class="card-back">
                  <h4>Responsibilities:</h4>
                  <ul>
                    <li>Full-stack development</li>
                    <li>API integration</li>
                    <li>Database design</li>
                  </ul>
                  <h4>Technologies:</h4>
                  <ul>
                    <li>Vuetify</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Intern Software Development</h3>
                  <p class="company">BIT by MC Sonae</p>
                  <p class="period">2024 - 2024</p>
                </div>
                <div class="card-back">
                  <h4>Responsibilities:</h4>
                  <ul>
                    <li>Database development</li>
                    <li>System optimization</li>
                    <li>Performance tuning</li>
                  </ul>
                  <h4>Technologies:</h4>
                  <ul>
                    <li>SQL</li>
                    <li>Oracle</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Manager</h3>
                  <p class="company">Predicados Fidalgos</p>
                  <p class="period">2016 - 2024</p>
                </div>
                <div class="card-back">
                  <h4>Achievements:</h4>
                  <ul>
                    <li>Optimized customer orders using computer systems</li>
                    <li>Reduced waiting times by 40%</li>
                    <li>Implemented digital tracking system</li>
                  </ul>
                  <h4>Skills:</h4>
                  <ul>
                    <li>Process Optimization</li>
                    <li>Team Management</li>
                    <li>System Analysis</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Manager</h3>
                  <p class="company">Mariniello & Gorizzia</p>
                  <p class="period">2011 - 2016</p>
                </div>
                <div class="card-back">
                  <h4>Achievements:</h4>
                  <ul>
                    <li>Created a stock management system</li>
                    <li>Added a VoIP phone system</li>
                  </ul>
                  <h4>Skills:</h4>
                  <ul>
                    <li>Process Optimization</li>
                    <li>Team Management</li>
                    <li>System Analysis</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Industrial Technician</h3>
                  <p class="company">Unicer S. A.</p>
                  <p class="period">2008 - 2011</p>
                </div>
                <div class="card-back">
                  <h4>Achievements:</h4>
                  <ul>
                    <li>Improved methodology for shift changes and break times increased production efficiency</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Support Specialist</h3>
                  <p class="company">PLSis</p>
                  <p class="period">2007 - 2008</p>
                </div>
                <div class="card-back">
                  <h4>Achievements:</h4>
                  <ul>
                    <li>Implemented a new support system</li>
                    <li>Implemented a remote support system</li>
                  </ul>
                  <h4>Skills:</h4>
                  <ul>
                    <li>Hardware and software troubleshooting</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Support Specialist</h3>
                  <p class="company">Mito</p>
                  <p class="period">2005 - 2007</p>
                </div>
                <div class="card-back">
                  <h4>Achievements:</h4>
                  <ul>
                    <li>Hardware maintenance and support</li>
                  </ul>
                  <h4>Skills:</h4>
                  <ul>
                    <li>Hardware and software troubleshooting</li>
                  </ul>
                </div>
              </div>
            </mat-card-content>
            <button class="nav-button next" (click)="scrollCarousel('experience', 'right')">❯</button>
          </div>
        </mat-card>
      </div>

      <div id="skills" class="skills-section section">
        <mat-card>
          <mat-card-header>
            <mat-card-title>&lt; Skills /&gt;</mat-card-title>
          </mat-card-header>
          <div class="carousel-container">
            <button class="nav-button prev" (click)="scrollCarousel('skills', 'left')">❮</button>
            <mat-card-content class="experience-grid">
              <div class="experience-card">
                <div class="card-front">
                  <h3>Hard Skills</h3>
                </div>
                <div class="card-back">
                  <ul>
                    <li>Coding</li>
                    <li>Debugging</li>
                    <li>Software Design and Testing</li>
                    <li>Web Development</li>
                    <li>Hardware</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Programming Languages</h3>
                </div>
                <div class="card-back">
                  <ul>
                    <li>Java</li>
                    <li>Kotlin</li>
                    <li>Swift</li>
                    <li>JavaScript / TypeScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Frameworks</h3>
                </div>
                <div class="card-back">
                  <ul>
                    <li>Laravel</li>
                    <li>Angular</li>
                    <li>Vuetify</li>
                  </ul>
                </div>
              </div>

              <div class="experience-card">
                <div class="card-front">
                  <h3>Tools and Software</h3>
                </div>
                <div class="card-back">
                  <ul>
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>IntelliJ IDEA</li>
                    <li>MySQL Workbench</li>
                  </ul>
                </div>
              </div>
            </mat-card-content>
            <button class="nav-button next" (click)="scrollCarousel('skills', 'right')">❯</button>
          </div>
        </mat-card>
      </div>

      <div id="education" class="education-section section">
        <mat-card>
          <mat-card-header>
            <mat-card-title>&lt; Education /&gt;</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="education-item">
              <h3>{{ '{' }} Software Developer {{ '}' }}</h3>
              <p class="institution">[ CESAE Digital, Portugal ]</p>
              <p class="period">( 2024 )</p>
            </div>
            <div class="education-item">
              <h3>{{ '{' }} CS50x by edX {{ '}' }}</h3>
              <p class="institution">[ Harvard University, USA ]</p>
              <p class="period">( 2023 )</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div id="languages" class="languages-section section">
        <mat-card>
          <mat-card-header>
            <mat-card-title>&lt; Languages /&gt;</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>[ English (B2) | French (B1) | Portuguese (native) ]</p>
          </mat-card-content>
        </mat-card>
      </div>

      <div id="achievements" class="achievements-section section">
        <mat-card>
          <mat-card-header>
            <mat-card-title>&lt; Achievements /&gt;</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="achievement-item">
              <h3>{{ '{' }} RoboCup International Competition 2005 {{ '}' }}</h3>
              <p>[ Osaka, Japan ] (2nd Place)</p>
            </div>
            <div class="achievement-item">
              <h3>{{ '{' }} Portuguese Robotics Competition 2005 {{ '}' }}</h3>
              <p>[ Coimbra, Portugal ] (1st Place)</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      overflow-y: auto;
      scroll-behavior: smooth;
    }

    .section {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      margin-bottom: 120px;
      min-height: 60vh;
    }

    .section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .hero-section,
    .experience-section,
    .skills-section,
    .education-section,
    .languages-section,
    .achievements-section {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.6s ease-out forwards;
      will-change: transform, opacity;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero-section {
      background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
      color: #d4d4d4;
      border-radius: 8px;
      margin-bottom: 40px;
      padding: 40px;
      border: 1px solid #323232;
      transition-delay: 0.3s;
    }

    .profile-info {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 30px;
    }

    .profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid #569CD6;
      box-shadow: 0 4px 15px rgba(86, 156, 214, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      flex-shrink: 0;
    }

    .profile-image:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(86, 156, 214, 0.4);
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .title-block {
      text-align: left;
    }

    h1 {
      font-size: 2.5em;
      color: #DCDCAA;
      margin-bottom: 10px;
    }

    .roles {
      font-size: 1.2em;
      color: #CE9178;
      margin-bottom: 15px;
    }

    .location, .contact-info {
      color: #569CD6;
      margin-bottom: 10px;
    }

    .contact-info a {
      color: #569CD6;
      text-decoration: none;
      &:hover {
        color: #DCDCAA;
      }
    }

    .bio {
      color: #d4d4d4;
      line-height: 1.6;
      margin-top: 20px;
      padding: 20px;
      background: rgba(86, 156, 214, 0.1);
      border-radius: 4px;
    }

    mat-card {
      background: #252526 !important;
      border: 1px solid #323232;
      margin-bottom: 20px;
    }

    mat-card-title {
      color: #569CD6;
      font-family: 'JetBrains Mono', monospace;
      padding: 16px;
    }

    .experience-item, .education-item, .achievement-item {
      padding: 16px;
      border-bottom: 1px solid #323232;
      
      &:last-child {
        border-bottom: none;
      }

      h3 {
        color: #DCDCAA;
        margin-bottom: 8px;
      }

      .company, .institution {
        color: #CE9178;
      }

      .period {
        color: #569CD6;
        font-size: 0.9em;
      }

      .description {
        color: #d4d4d4;
        margin-top: 8px;
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 16px;
    }

    .skill-category {
      h3 {
        color: #DCDCAA;
        margin-bottom: 12px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          color: #CE9178;
          margin-bottom: 8px;
          &::before {
            content: "::";
            color: #569CD6;
            margin-right: 8px;
          }
        }
      }
    }

    .languages-section {
      mat-card-content {
        padding: 16px;
        color: #CE9178;
      }
      transition-delay: 1.5s;
    }

    .social-links {
      display: flex;
      gap: 8px;
      margin-top: 16px;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
  
      color: #569CD6;
      text-decoration: none;
      font-size: 0.9em;
  
   
      background: transparent;
      transition: all 0.3s ease;

      &:hover {
        color: #DCDCAA;
      }

      mat-icon {
        

      }
    }

    @media (max-width: 768px) {
      .profile-info {
        flex-direction: column;
        text-align: center;
      }

      .title-block {
        text-align: center;
      }

      .profile-image {
        width: 150px;
        height: 150px;
      }

      h1 {
        font-size: 2em;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .social-links {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
      }

      .social-link {
        font-size: 0.8em;
      }
    }

    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease-out;
    }

    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .experience-grid {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 70px;
      padding: 30px;
      margin: 10px;
      margin-bottom: 100px;
      scrollbar-width: thin;
      scrollbar-color: #569CD6 #1e1e1e;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
        height: 8px;
      }

      &::-webkit-scrollbar-track {
        background: #1e1e1e;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: #569CD6;
        border-radius: 4px;
        
        &:hover {
          background: #DCDCAA;
        }
      }
    }

    .experience-card {
      min-width: 300px;
      flex: 0 0 auto;
      height: 400px;
      perspective: 1000px;
      cursor: pointer;
      scroll-snap-align: start;
      margin-bottom: 20px;
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: transform 0.6s ease-out;
      padding: 25px;
      border-radius: 12px;
      background: #2d2d2d;
      border: 1px solid #323232;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .card-front {
      transform: rotateY(0deg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      h3 {
        color: #DCDCAA;
        margin-bottom: 15px;
        font-size: 1.3em;
      }

      .company {
        color: #CE9178;
        margin-bottom: 10px;
        font-size: 1.1em;
      }

      .period {
        color: #569CD6;
        font-size: 0.9em;
      }
    }

    .card-back {
      transform: rotateY(180deg);
      background: #1e1e1e;
      overflow-y: auto;

      h4 {
        color: #DCDCAA;
        margin: 15px 0 10px;
        font-size: 1.1em;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0 0 20px 0;

        li {
          color: #CE9178;
          margin-bottom: 8px;
          font-size: 0.95em;
          
          &::before {
            content: "→";
            color: #569CD6;
            margin-right: 10px;
          }
        }
      }
    }

    .experience-card:hover .card-front {
      transform: rotateY(180deg);
    }

    .experience-card:hover .card-back {
      transform: rotateY(360deg);
    }

    @media (max-width: 768px) {
      .experience-grid {
        padding: 20px;
        gap: 40px;
      }

      .experience-card {
        min-width: 260px;
        height: 220px;
      }

      .card-front,
      .card-back {
        padding: 20px;
      }
    }

    .experience-section { transition-delay: 0.6s; }
    .skills-section { transition-delay: 0.9s; }
    .education-section { transition-delay: 1.2s; }
    .achievements-section { transition-delay: 1.8s; }

    .home-container {
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      scroll-snap-type: y mandatory;
    }

    .section {
      scroll-snap-align: start;
    }

    .carousel-container {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 40px;
      margin: 20px;
      background: transparent;
      border-radius: 8px;
    }

    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: transparent;
      border: none;
      outline: none;
      color: rgba(252, 252, 252, 0.32);
      font-size: 32px;
      padding: 10px;
      cursor: pointer;
      z-index: 2;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: transparent;
        color: rgba(86, 156, 214, 0.8);
        transform: translateY(-50%) scale(1.2);
      }

      &:focus {
        outline: none;
      }

      &:active {
        transform: translateY(-50%) scale(0.95);
      }

      &.prev {
        left: 10px;
      }

      &.next {
        right: 10px;
      }

      &::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 100%;
        top: 0;
      }

      &.prev::after {
        right: -50px;
        background: linear-gradient(to right, rgba(37, 37, 38, 0.9), transparent);
      }

      &.next::after {
        left: -50px;
        background: linear-gradient(to left, rgba(37, 37, 38, 0.9), transparent);
      }
    }

    .experience-grid {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 40px;
      padding: 30px;
      margin: 0;
      scrollbar-width: none;
      -ms-overflow-style: none;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .experience-card {
      min-width: 320px;
      flex: 0 0 auto;
      height: 300px;
      perspective: 1000px;
      cursor: pointer;
      scroll-snap-align: center;
      margin: 10px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    @media (max-width: 768px) {
      .carousel-container {
        padding: 0 30px;
      }

      .nav-button {
        padding: 15px 10px;
        font-size: 20px;
      }

      .experience-grid {
        gap: 20px;
        padding: 20px;
      }

      .experience-card {
        min-width: 280px;
        height: 250px;
      }
    }
  `]
})
export class HomeComponent implements AfterViewInit {
  private observer!: IntersectionObserver;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private scrollService: ScrollService,
    private el: ElementRef
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    const sections = this.el.nativeElement.querySelectorAll('.section');
    sections.forEach((section: Element) => {
      this.observer.observe(section);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  scrollCarousel(section: string, direction: 'left' | 'right') {
    const container = document.querySelector(`#${section} .experience-grid`) as HTMLElement;
    if (container) {
      const scrollAmount = 400;
      const scrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }
} 