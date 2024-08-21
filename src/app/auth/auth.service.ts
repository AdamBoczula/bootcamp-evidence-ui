import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthLogin } from './model/auth-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username = 'admin';
  private password = '123qwe';

  private _isLogged$ = new BehaviorSubject(false);
  public isLogged = this._isLogged$.asObservable;

  public login({ password, username }: AuthLogin): boolean {
    const loggedIn = password === this.password && username === this.username;
    if (loggedIn) this._isLogged$.next(true);
    return loggedIn;
  }

  public logout(): void {
    this._isLogged$.next(false);
  }
}
