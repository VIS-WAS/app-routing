import { inject } from '@angular/core';
import { AuthSerivce } from './Services/auth.service';
import { Router } from '@angular/router';
import { AuthGuardService } from './Services/authgaurad.service';
import { CourseService } from './Services/course.service';

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

export const resolveFn = () => {
  const courseService: CourseService = inject(CourseService);
  return courseService.getAllcourses();
};
