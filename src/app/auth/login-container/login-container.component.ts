import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserLoginType } from '../models/userLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginFormComponent],
  template: `<app-login-form (onSubmit)="onSubmit($event)" />`,
  styleUrl: './login-container.component.scss',
})
export class LoginContainerComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public onSubmit(userLogin: UserLoginType): void {
    this.authService.login(userLogin);
    this.router.navigate(['']);
  }
}
