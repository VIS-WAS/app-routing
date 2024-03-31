import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  paramMapObs;

  selectedCourse: Course;
  courseID: number;

  ngOnInit() {
    // this.courseID = this.activeRoute.snapshot.params['id'];   // old way of getting value of route parameter value
    //this.courseID = +this.activeRoute.snapshot.paramMap.get('id'); // this can be replace by below. bcz it will not notified when changes on URL happend

    // this.activeRoute.params.subscribe((data) => {
    //   this.courseID = +data['id'];

    //   this.selectedCourse = this.courseService.courses.find(
    //     (course) => course.id === this.courseID
    //   );
    // });

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseID = +data.get('id');

      this.selectedCourse = this.courseService.courses.find(
        (course) => course.id === this.courseID
      );
    });
  }

  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}
