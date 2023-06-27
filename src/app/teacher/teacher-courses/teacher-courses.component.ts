import { Component } from '@angular/core'
import { Observable, catchError, tap } from 'rxjs'
import { ICourse, IStudent } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCourseCreatorDialogComponent } from './teacher-course-creator-dialog/teacher-course-creator-dialog.component'
import { UiService } from 'src/app/common/ui.service'
import { Router } from '@angular/router'

export interface ICreateCourseData {
  name: string
  credits: number
  studentIds: string[]
}

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
    private dialog: MatDialog,
    private uiService: UiService,
    private router: Router
  ) {
    this.courses$ = this.teacherService.courses$.pipe(
      catchError((err, caugt) => {
        this.isError = true
        return caugt
      })
    )
  }

  openCourse(id: number, name: string) {
    this.router.navigate(['teacher', 'courses', id], {
      queryParams: {
        name,
      },
    })
  }

  ngOnInit(): void {
    this.teacherService.updateCourses()
  }

  openCourseCreator() {
    const dialogRef = this.dialog.open(TeacherCourseCreatorDialogComponent)

    dialogRef.afterClosed().subscribe((data) => {
      if (data && data.name && data.credits) this.createCourse(data)
    })
  }

  createCourse(data: ICreateCourseData) {
    this.teacherService
      .createCourse(data)
      .pipe(
        catchError((err, caught) => {
          this.uiService.showToast('Kurs konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }
}
