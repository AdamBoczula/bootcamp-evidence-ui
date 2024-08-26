import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginFormComponent],
  template: `<app-login-form />`,
  styleUrl: './login-container.component.scss',
})
export class LoginContainerComponent {
  constructor(private authService: AuthService) {}
}
