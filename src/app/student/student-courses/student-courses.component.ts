import { Component, OnInit } from '@angular/core'
import { StudentService } from '../student.service'
import { Observable, catchError, tap } from 'rxjs'
import { IStudentCourse } from 'src/app/interfaces'
// import { trigger, state, style, animate, transition } from '@angular/animations'

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
  courses$: Observable<IStudentCourse[]>
  isError = false
  isTransitioned = false

  cardState = ''

  onCardClick() {
    this.cardState = 'card-clicked'
    setTimeout(() => {
      this.cardState = ''
    }, 300)
  }

  example = exampleStudentCourse

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
    setTimeout(() => {
      this.isTransitioned = true
    }, 100)
    this.studentService.updateCourses()
  }
}
