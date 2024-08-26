import { Routes } from '@angular/router';
import { LoginContainerComponent } from './auth/login-container/login-container.component';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { loginGuard } from './auth/login.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginContainerComponent,
  },
  {
    path: '',
    component: DashboardContainerComponent,
    canActivate: [loginGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
