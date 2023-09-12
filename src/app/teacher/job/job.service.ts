import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { environment } from 'src/app/environment/environment.demo'
import { IStudyJob } from 'src/app/interfaces'

@Injectable({
  providedIn: 'root',
})
export class JobService {
  readonly job$ = new BehaviorSubject<IStudyJob | undefined>(undefined)

  constructor(private httpClient: HttpClient) {}

  private getStudyJob(id: number): Observable<IStudyJob> {
    return this.httpClient.get<IStudyJob>(
      `${environment.baseUrl}/teacher/study-job/${id}`
    )
  }

  updateJob(id: number) {
    this.getStudyJob(id)
      .pipe(tap((job) => this.job$.next(job)))
      .subscribe()
  }
}
