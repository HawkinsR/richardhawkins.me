import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience',
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
    title: 'Certifications',
  },
];

