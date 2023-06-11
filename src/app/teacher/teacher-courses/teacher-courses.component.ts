import { Component } from '@angular/core'
import { Observable, catchError, tap } from 'rxjs'
import { ICourse } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCourseCreatorDialogComponent } from './teacher-course-creator-dialog/teacher-course-creator-dialog.component'

@Component({
  selector: 'app-tacher-courses',
  templateUrl: './teacher-courses.component.html',
  styles: [
    `
      .active-link {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      }
    `,
  ],
})
export class TeacherCoursesComponent {
  courses$: Observable<ICourse[]>
  isError = false

  constructor(
    private teacherService: TeacherService,
    private dialog: MatDialog
  ) {
    this.courses$ = this.teacherService.courses$.pipe(
      tap(() => (this.isError = false)),
      catchError((err, caugt) => {
        this.isError = true
        return caugt
      })
    )
  }

  ngOnInit(): void {
    this.teacherService.updateCourses()
  }

  openCourseCreator() {
    const dialogRef = this.dialog.open(TeacherCourseCreatorDialogComponent)

    dialogRef
      .afterClosed()
      .subscribe((result) => console.log(`Dialog result: ${result}`))
  }
}
