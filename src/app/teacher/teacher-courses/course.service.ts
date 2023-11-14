import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, filter, mergeMap, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { TeacherCourseCreatorDialogComponent } from './teacher-course-creator-dialog/teacher-course-creator-dialog.component'

export interface ICoursePre {
  _id: number
  name: string
  credits: number
  teacherCount: number
  studentCount: number
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  readonly courses$ = new BehaviorSubject<ICoursePre[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private ui: UiService,
    private dialog: MatDialog
  ) {}

  private getCourses(): Observable<ICoursePre[]> {
    return this.httpClient.get<ICoursePre[]>(
      `${environment.baseUrl}/teacher/courses`
    )
  }

  updateCourses() {
    this.getCourses().subscribe({
      next: (courses) => this.courses$.next(courses),
      error: (e: Error) => {
        this.ui.showToast('Kurse konnten nicht geladen werden')
        this.courses$.error(new Error('server 500'))
      },
    })
  }

  postCourse(data: any) {
    return this.httpClient.post<ICoursePre[]>(
      `${environment.baseUrl}/teacher/courses`,
      data
    )
  }

  addCourse() {
    const dialogRef = this.dialog.open(TeacherCourseCreatorDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data != undefined),
        mergeMap(this.postCourse),
        tap((courses) => this.courses$.next(courses))
      )
      .subscribe()
  }
}
