import { inject } from '@angular/core';
import { AuthSerivce } from './Services/auth.service';
import { Router } from '@angular/router';

export const canActivate = () => {
  const isAuthenticate = inject(AuthSerivce);
  const router = inject(Router);
  if (isAuthenticate.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['Login']);
    return false;
  }
};

export const canActivateChild = () => {
  return canActivate();
};
