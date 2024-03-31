import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  selectedCourse: Course;
  courseID: number;

  ngOnInit() {
    // this.courseID = this.activeRoute.snapshot.params['id'];   // old way of getting value of route parameter value
    this.courseID = +this.activeRoute.snapshot.paramMap.get('id');
    this.selectedCourse = this.courseService.courses.find(
      (course) => course.id === this.courseID
    );
  }
}
