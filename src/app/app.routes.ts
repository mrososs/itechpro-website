import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'smart-hotels',
    loadComponent: () =>
      import('./pages/smart-hotels/smart-hotels.component').then(
        (m) => m.SmartHotelsComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./pages/team/team.component').then((m) => m.TeamComponent),
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(
        (m) => m.CareersComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'ai-agent',
    loadComponent: () =>
      import('./pages/ai-agent/ai-agent.component').then(
        (m) => m.AiAgentComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
