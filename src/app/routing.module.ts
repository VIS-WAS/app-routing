import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './Services/authgaurad.service';
import { canActivate, canActivateChild, resolveFn } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  {
    path: 'Contact',
    component: ContactComponent,
    canDeactivate: [
      (comp): ContactComponent => {
        return comp.canExit();
      },
    ],
  },
  {
    path: 'Courses',
    component: CoursesComponent,
    // resolve: { courses: () => {} },
    resolve: { courses: resolveFn },
  },

  {
    path: 'Courses',
    canActivateChild: [canActivateChild],
    children: [
      { path: 'course/:id', component: CourseDetailComponent },
      {
        path: 'Checkout',
        component: CheckoutComponent,
      },
    ],
  },

  { path: 'Login', component: LoginComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
