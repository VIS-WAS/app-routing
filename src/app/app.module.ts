import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BannerComponent } from './home/banner/banner.component';
import { PopularComponent } from './home/popular/popular.component';
import { CourseService } from './Services/course.service';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';

//DEFINE ROUTE
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  // { path: 'Courses/course/:id', component: CourseDetailComponent },
  {
    path: 'Courses',
    children: [{ path: 'course/:id', component: CourseDetailComponent }],
  },
  { path: '**', component: NotFoundComponent }, //it should be defined at the end
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    NotFoundComponent,
    BannerComponent,
    PopularComponent,
    CourseDetailComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
