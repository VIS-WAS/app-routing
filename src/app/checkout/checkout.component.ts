import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  //---------------//Passing data with a Route//--------------//
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  course;

  ngOnInit() {
    //--------// way of passing static date from router.module.ts inside data: //----------//
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data;
    // });
    //--------// way of passing static date from router.module.ts inside data: //----------//
    // this.course = this.router.getCurrentNavigation().extras.state;

    this.course = history.state;
  }
}
