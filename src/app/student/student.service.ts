import { Injectable } from '@angular/core'
import { Observable, ReplaySubject, Subject } from 'rxjs'
import { ICourse } from '../interfaces'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environment/environment.demo'
import { UiService } from '../common/ui.service'

export interface IStudentService {
  readonly courses$: Subject<ICourse[]>
  updateCourses(): void
}

@Injectable()
export class StudentService implements IStudentService {
  readonly courses$: Subject<ICourse[]> = new ReplaySubject<ICourse[]>(1)

  constructor(private httpClient: HttpClient, private uiService: UiService) {}

  private getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(
      `${environment.baseUrl}/student/courses`
    )
  }

  updateCourses() {
    this.getCourses().subscribe({
      next: (courses) => this.courses$.next(courses),
      error: (e: Error) => {
        this.uiService.showToast('Kurse konnten nicht geladen werden')
        this.courses$.error(new Error('server 500'))
      },
    })
  }
}
