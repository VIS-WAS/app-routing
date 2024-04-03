import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthSerivce {
  isLogged: Boolean = false;
  userService: UserService = inject(UserService);

  login(username: string, password: string) {
    let user = this.userService.users.find(
      (data) => data.username === username && data.password === password
    );
    if (user === undefined) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
    return user;
  }

  logout() {
    this.isLogged = false;
  }

  isAuthenticated() {
    return this.isLogged;
  }
}
