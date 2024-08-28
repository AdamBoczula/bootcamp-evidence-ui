import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ValidatorsModule } from '../../validators/validators.module';
import { UserLoginType } from '../models/userLogin';

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

  @Output()
  public onSubmit = new EventEmitter<UserLoginType>();

  public onLogin(): void {
    this.onSubmit.emit(this.userLoginModel);
    this.loginForm.resetForm({ password: '', username: '' });
  }
}
