import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  mergeMap,
  tap,
} from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { CourseCreatorService } from '../../shared/ui/teacher-course-creator/teacher-course-creator.service'

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
    private courseCreator: CourseCreatorService
  ) {}

  private getCourses(): Observable<ICoursePre[]> {
    let params = new HttpParams().set('self', true)

    return this.httpClient.get<ICoursePre[]>(`${environment.baseUrl}/courses`, {
      params: params,
    })
  }

  updateCourses() {
    this.getCourses()
      .pipe(
        tap(console.info),
        tap((courses) => this.courses$.next(courses)),
        catchError((err) => {
          this.ui.showToast('Kurse konnten nicht geladen werden')
          this.courses$.error(new Error('server 500'))
          return err
        })
      )
      .subscribe()
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
        filter((data) => data != undefined),
        mergeMap((data) => this.postCourse(data)),
        tap(() => {
          this.updateCourses()
        })
      )
      .subscribe()
  }
}
