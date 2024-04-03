import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSerivce } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  isAuthenticate: AuthSerivce = inject(AuthSerivce);

  router: Router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log(this.isAuthenticate.isAuthenticated());
    if (this.isAuthenticate.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['Login']);
      return false;
    }
  }
}
