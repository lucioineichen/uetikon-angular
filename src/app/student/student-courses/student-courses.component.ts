import { Component, OnInit } from '@angular/core'
import { StudentService } from '../student.service'
import { Observable, catchError, tap } from 'rxjs'
import { IStudentCourse } from 'src/app/interfaces'

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styles: [],
})
export class StudentCoursesComponent implements OnInit {
  courses$: Observable<IStudentCourse[]>
  isError = false

  constructor(private studentService: StudentService) {
    this.courses$ = this.studentService.courses$.pipe(
      tap(() => (this.isError = false)),
      catchError((err, caugt) => {
        this.isError = true
        return caugt
      })
    )
  }

  ngOnInit(): void {
    this.studentService.updateCourses()
  }
}
