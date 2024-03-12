import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'

export interface ICourse {
  _id: number
  name: string
  credits: number
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  readonly courses$ = new BehaviorSubject<ICourse[] | undefined>(undefined)

  constructor(private httpClient: HttpClient, private ui: DialogService) {}

  private getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(
      `${environment.baseUrl}/student/courses`
    )
  }

  updateCourse() {
    this.getCourses()
      .pipe(
        tap((courses) => this.courses$.next(courses)),
        catchError((err) => {
          this.ui.showToast('Kurse konnten nicht geladen werden')
          this.courses$.error(new Error('server 500'))
          return err
        })
      )
      .subscribe()
  }

  getCourse(id: number) {
    return this.httpClient.get<ICourse>(`${environment.baseUrl}/course/${id}`)
  }
}
