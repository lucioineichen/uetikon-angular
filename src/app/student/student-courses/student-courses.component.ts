import { Component, OnInit } from '@angular/core'
import { StudentService } from '../student.service'
import { Observable, catchError, tap } from 'rxjs'
import { ICourse } from 'src/app/interfaces'

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styles: [],
})
export class StudentCoursesComponent implements OnInit {
  courses$: Observable<ICourse[]>
  isError = false

  constructor(private studentService: StudentService) {
    this.courses$ = this.studentService.courses$.pipe(
      tap(() => (this.isError = false)),
      catchError((err, caugt) => {
        console.log('hello error')
        this.isError = true
        return caugt
      })
    )
  }

  ngOnInit(): void {
    this.studentService.updateCourses()
  }

  asString(value: any) {
    return value as string
  }
}
