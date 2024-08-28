import { Injectable } from '@angular/core';
import { UserLoginType } from './models/userLogin';
import { USER } from './UserSecret';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  public isUserLoggedIn$ = this._isUserLoggedIn$.asObservable();

  public login({ password, username }: UserLoginType): boolean {
    console.log('🚀 ~ AuthService ~ login ~ username:', username);
    console.log('🚀 ~ AuthService ~ login ~ password:', password);
    return password === USER.password && username === USER.username;
  }
  public logout(): void {}
}
