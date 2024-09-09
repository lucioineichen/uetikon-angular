import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { ICoursePre } from 'src/app/teacher/course/course-list/course.service'
import { AuthService } from 'src/app/core/auth/auth.service'
import { ICourse } from 'src/app/shared/utils/interfaces'

// export interface ICoursePre {
//   _id: number
//   name: string
//   credits: number
//   teacherCount: number
//   studentCount: number
//   grade: number
//   progress: number
// }

@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  readonly courses$ = new BehaviorSubject<ICourse[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private ui: DialogService,
    private auth: AuthService
  ) {}

  private getCourses(): Observable<ICourse[]> {
    let params = new HttpParams().set(
      'student',
      this.auth.currentUser$.value._id
    )

    return this.httpClient.get<ICourse[]>(`${environment.baseUrl}/courses`, {
      params,
    })
  }

  updateCourses() {
    this.getCourses()
      .pipe(
        tap(console.info),
        tap((courses) => this.courses$.next(courses)),
        catchError((err) => {
          this.ui.showToast('Kurse konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
