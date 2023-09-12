import { Component, OnInit } from '@angular/core'
import { StudentService } from '../student.service'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { IStudentCourse } from 'src/app/interfaces'

export const exampleStudentCourse: IStudentCourse = {
  _id: 1,
  name: 'Mathe',
  credits: 6,
  grade: 0.83,
  progress: 0.29,
}

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-course.component.css'],
})
export class StudentCoursesComponent implements OnInit {
  courses$: BehaviorSubject<IStudentCourse[] | undefined>

  example = exampleStudentCourse

  constructor(private studentService: StudentService) {
    this.courses$ = this.studentService.courses$
  }

  ngOnInit(): void {
    this.studentService.updateCourses()
  }
}
