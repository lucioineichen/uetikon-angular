import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { CourseService, ICoursePre } from './course.service'

// export const exampleStudentCourse: IStudentCourse = {
//   _id: 1,
//   name: 'Mathe',
//   credits: 6,
//   grade: 0.83,
//   progress: 0.29,
// }

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-course.component.css'],
})
export class StudentCoursesComponent implements OnInit {
  courses$: BehaviorSubject<ICoursePre[] | undefined>

  // example = exampleStudentCourse

  constructor(private service: CourseService) {
    this.courses$ = this.service.courses$
  }

  ngOnInit(): void {
    this.service.updateCourses()
  }
}
