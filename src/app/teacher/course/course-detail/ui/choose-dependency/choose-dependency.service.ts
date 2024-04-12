import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'
import { ChooseDependencyComponent } from './choose-dependency.component'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Injectable({
  providedIn: 'root',
})
export class ChooseDependencyService {
  readonly job$ = new BehaviorSubject<IStudyJob | undefined>(undefined)
  readonly jobList$ = new BehaviorSubject<IStudyJob[] | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  chooseDependency(
    courseId: number,
    job: IStudyJob
  ): Observable<IRef | undefined> {
    this.job$.next(job)
    this.updateJobList(courseId)
    const dialogRef = this.dialog.open(ChooseDependencyComponent, {
      data: courseId,
    })

    return dialogRef.afterClosed()
  }

  updateJobList(id: number) {
    this.getJobList(id)
      .pipe(
        tap((list) => this.jobList$.next(list)),
        tap(console.log),
        catchError((err) => {
          this.ui.showToast('Kurse konnten nicht geladen werden')
          this.jobList$.error(new Error('server 500'))
          return err
        })
      )
      .subscribe()
  }

  getJobList(id: number): Observable<IStudyJob[]> {
    let params = new HttpParams().set('course', id)
    params = params.set('fromat', 'ref')

    return this.http.get<IStudyJob[]>(`${environment.baseUrl}/containers`, {
      params: params,
    })
  }
}
