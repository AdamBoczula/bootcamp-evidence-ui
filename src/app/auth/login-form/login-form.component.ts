import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthLogin } from '../model/auth-login';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { ValidatorsModule } from '../../validators/validators.module';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ValidatorsModule,
  ],
  template: `
    <form
      #loginForm="ngForm"
      (ngSubmit)="submit(authLogin.username, authLogin.password)"
    >
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input
          required
          maxlength="13"
          matInput
          type="text"
          [(ngModel)]="authLogin.username"
          name="username"
        />
        <mat-hint align="end">{{ authLogin.username.length }}/13</mat-hint>

        <mat-hint
          align="start"
          *ngIf="
            loginForm.controls['username'].dirty &&
            loginForm.getError('required', 'username')
          "
          >Username is required!</mat-hint
        >
      </mat-form-field>

      <mat-form-field>
        <mat-label>Password</mat-label>
        <input
          minlength="5"
          required
          containsCharacterAndNumber
          matInput
          type="password"
          [(ngModel)]="authLogin.password"
          name="password"
        />
        @if (
          loginForm.controls['password'].dirty &&
          loginForm.getError('minlength', 'password')
        ) {
          <mat-hint align="end"
            >Min length of password should be 5 characters!</mat-hint
          >
        } @else if (
          loginForm.controls['password'].dirty &&
          loginForm.getError('containsCahracterAndNumber', 'password')
        ) {
          <mat-hint align="end"
            >Password should contains min one number and one letter</mat-hint
          >
        }
      </mat-form-field>
      @if (invalidLogin && loginForm.submitted) {
        <p>Wrong username or password</p>
      }
      <button mat-raised-button color="accent" [disabled]="loginForm.invalid">
        Login
      </button>
    </form>
  `,
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @ViewChild('loginForm')
  public loginForm!: NgForm;

  constructor(private readonly authService: AuthService) {}
  public invalidLogin = false;
  public authLogin: AuthLogin = { username: '', password: '' };
  public submit(username: string, password: string): void {
    const loggedIn = this.authService.login({ password, username });
    if (loggedIn) {
      this.invalidLogin = false;
      this.loginForm.resetForm({ username: '', password: '' });
    } else {
      this.invalidLogin = true;
    }
  }
}
