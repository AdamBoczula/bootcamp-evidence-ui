import { Routes } from '@angular/router';
import { loginGuard } from './auth/login.guard';
import { dashboardCategoryResolver } from './dashboard/dashboard-category.resolver';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [loginGuard],
    resolve: [dashboardCategoryResolver],
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
