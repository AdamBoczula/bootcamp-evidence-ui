import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state): UrlTree | boolean => {
  console.log('🚀 ~ state:', state);
  console.log('🚀 ~ route:', route);

  // const canEnter = !!Math.round(Math.random());
  const url: UrlTree = inject(Router).createUrlTree(['/login']);
  return true || url;
};
