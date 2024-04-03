import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthSerivce } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService: AuthSerivce = inject(AuthSerivce);
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  router: Router = inject(Router);

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));
      if (logout) {
        this.authService.logout();
        alert(
          'You are now logged out. IsLogged = ' + this.authService.isLogged
        );
      }
    });
  }

  OnLoginClicked() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if (user === undefined) {
      alert(' The username or password is incorrect');
    } else {
      this.router.navigate(['Courses']);
    }
  }
}
