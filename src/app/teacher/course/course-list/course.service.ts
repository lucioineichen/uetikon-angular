import { HttpClient, HttpParams } from '@angular/common/http'
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
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { CourseCreatorService } from '../../shared/ui/teacher-course-creator/teacher-course-creator.service'
import { ICourse } from 'src/app/shared/utils/interfaces'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { AuthService } from 'src/app/core/auth/auth.service'

export interface ICoursePre {
  _id: number
  name: string
  credits: number
  teacherCount: number
  studentCount: number
  isProject: boolean
  imageUrl: string
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  readonly courses$ = new BehaviorSubject<ICoursePre[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private ui: DialogService,
    private courseCreator: CourseCreatorService,
    private auth: AuthService
  ) {}

  private getCourses(): Observable<ICourse[]> {
    let params = new HttpParams().set(
      'teacher',
      this.auth.currentUser$.value._id
    )

    return this.httpClient.get<ICourse[]>(`${environment.baseUrl}/courses`, {
      params: params,
    })
  }

  updateCourses() {
    this.getCourses()
      .pipe(
        map((courses) => {
          return courses.map((course) => {
            return {
              _id: course._id,
              name: course.name,
              credits: course.credits,
              teacherCount: course.teacherList.length,
              studentCount: course.studentList.length,
              isProject: course.isProject,
              imageUrl: course.imageUrl,
            }
          })
        }),
        tap((courses) => this.courses$.next(courses)),
        catchError((err) => {
          this.ui.showToast('Kurse konnten nicht geladen werden')
          this.courses$.error(new Error('server 500'))
          return err
        })
      )
      .subscribe()
  }

  deleteCourse(id: number) {
    return this.httpClient.delete(`${environment.baseUrl}/courses/${id}`)
  }

  postCourse(data: any) {
    return this.httpClient.post<ICoursePre[]>(
      `${environment.baseUrl}/courses`,
      data
    )
  }

  addCourse() {
    this.courseCreator
      .createCourse()
      .pipe(
        filterNullish(),
        mergeMap((data) => this.postCourse(data)),
        tap(() => {
          this.updateCourses()
        }),
        catchError((err) => {
          this.ui.showToast('Kurst konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }
}
