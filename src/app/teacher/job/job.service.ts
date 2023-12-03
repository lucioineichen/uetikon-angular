import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { IStudyJob } from 'src/app/interfaces'

@Injectable({
  providedIn: 'root',
})
export class JobService {
  readonly job$ = new BehaviorSubject<IStudyJob | undefined>(undefined)

  constructor(private httpClient: HttpClient, private ui: UiService) {}

  private getStudyJob(id: number): Observable<IStudyJob> {
    return this.httpClient.get<IStudyJob>(
      `${environment.baseUrl}/teacher/study-job/${id}`
    )
  }

  update(id: number) {
    this.getStudyJob(id)
      .pipe(
        tap(console.log),
        tap((job) => this.job$.next(job)),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht geladen werden')
          this.job$.error(err)
          return err
        })
      )
      .subscribe()
  }
}
