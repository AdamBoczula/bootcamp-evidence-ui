import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserLoginType } from './models/userLogin';
import { USER } from './UserSecret';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isUserLoggedIn$ = new BehaviorSubject<boolean>(true);
  public isUserLoggedIn$ = this._isUserLoggedIn$.asObservable();

  public login({ password, username }: UserLoginType): boolean {
    const isValid = password === USER.password && username === USER.username;
    if (!isValid) return false;
    this._isUserLoggedIn$.next(true);
    return true;
  }

  public logout(): void {}
}
