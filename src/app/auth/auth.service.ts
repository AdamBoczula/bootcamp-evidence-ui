import { Injectable } from '@angular/core';
import { UserLoginType } from './models/userLogin';
import { USER } from './UserSecret';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login({ password, username }: UserLoginType): boolean {
    return password === USER.password && username === USER.username;
  }
}
