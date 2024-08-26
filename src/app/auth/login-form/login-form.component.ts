import { Component, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { UserLoginType } from '../models/userLogin';
import { CommonModule } from '@angular/common';
import { ValidatorsModule } from '../../validators/validators.module';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    ValidatorsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @ViewChild('loginForm')
  public loginForm!: NgForm;
  public userLoginModel: UserLoginType = { password: '', username: '' };

  public onLogin(): void {
    // if (this.loginForm.invalid) return;
    this.loginForm.resetForm({ password: '', username: '' });
  }
}
