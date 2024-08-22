import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
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
  public userLoginModel: UserLoginType = { password: '', username: '' };

  public onLogin(): void {
    console.log('🚀 ~ LoginFormComponent ~ onLogin ~ onLogin:');
  }
}
