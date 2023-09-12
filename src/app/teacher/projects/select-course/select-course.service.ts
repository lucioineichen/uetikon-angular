import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { ICourse, IStudyJob, Student, Teacher } from 'src/app/interfaces'
import { SelectCourseComponent } from './select-course.component'
import { SelectJobFromCourseComponent } from './select-job-from-course/select-job-from-course.component'
import { IStudyPath } from '../../study-path/study-path.service'

@Injectable({
  providedIn: 'root',
})
export class SelectCourseService {
  readonly courses$ = new BehaviorSubject<ICourse[] | undefined>(undefined)
  readonly path$ = new BehaviorSubject<IStudyPath | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getCourses(): Observable<ICourse[]> {
    return this.httpClient
      .get<ICourse[]>(`${environment.baseUrl}/user/courses`)
      .pipe(
        tap((courses) =>
          courses.forEach((course) => {
            course.students = course.students.map(Student.Build)
            course.teachers = course.teachers.map(Teacher.Build)
          })
        )
      )
  }

  updateCourses() {
    this.getCourses()
      .pipe(
        tap((courses) => this.courses$.next(courses)),
        catchError((err) => {
          this.uiService.showToast('Kurse konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  selectCourseWithJob(): Observable<{ course: ICourse; job: IStudyJob } | ''> {
    const dialogRef = this.dialog.open(SelectCourseComponent)

    return dialogRef.afterClosed().pipe(
      filter((data) => data != ''),
      mergeMap((course) => {
        return this.selectJob(course)
      }),
      filter((data) => data != '')
    )
  }

  selectJob(
    course: ICourse
  ): Observable<{ course: ICourse; job: IStudyJob } | ''> {
    const dialogRef = this.dialog.open(SelectJobFromCourseComponent, {
      data: course,
    })

    return dialogRef.afterClosed().pipe(
      map((data) => {
        if (data == '') return ''
        return { course, job: data }
      })
    )
  }

  private getPath(courseId: number): Observable<IStudyPath> {
    return this.httpClient.get<IStudyPath>(
      `${environment.baseUrl}/teacher/course/${courseId}/path`
    )
  }

  updatePath(courseId: number) {
    this.getPath(courseId)
      .pipe(
        tap((path) => this.path$.next(path)),
        catchError((err) => {
          this.uiService.showToast('LernWeg konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
