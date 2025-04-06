import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'About - Tiago Costa'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience - Tiago Costa'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects - Tiago Costa'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact - Tiago Costa'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
