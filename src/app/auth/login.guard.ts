import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const url: UrlTree = inject(Router).createUrlTree(['/login']);

  return inject(AuthService).isUserLoggedIn$.pipe(
    map((isLoggedIn) => {
      return isLoggedIn || url;
    }),
  );
};
