import { Routes } from '@angular/router';
import { loginGuard } from './auth/login.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [loginGuard],
    loadComponent: () =>
      import(
        './dashboard/dashboard-container/dashboard-container.component'
      ).then((m) => m.DashboardContainerComponent),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
