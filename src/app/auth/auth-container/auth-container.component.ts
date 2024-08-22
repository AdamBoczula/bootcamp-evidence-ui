import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-auth-container',
  standalone: true,
  imports: [LoginFormComponent],
  template: ` <app-login-form />`,
  styleUrl: './auth-container.component.scss',
})
export class AuthContainerComponent {}
