import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { IStudyJob } from 'src/app/interfaces'
import { SelectJobsComponent } from './select-jobs.component'

@Injectable({
  providedIn: 'root',
})
export class SelectJobsService {
  readonly jobs$ = new BehaviorSubject<IStudyJob[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getJobs(): Observable<IStudyJob[]> {
    return this.httpClient.get<IStudyJob[]>(
      `${environment.baseUrl}/teacher/study-jobs`
    )
  }

  updateJobs() {
    this.getJobs()
      .pipe(
        tap((jobs) => this.jobs$.next(jobs)),
        catchError((err) => {
          this.uiService.showToast('LernJobs konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  selectJobs(selectedJobs?: IStudyJob[]): Observable<IStudyJob[] | ''> {
    console.log(selectedJobs)
    const dialogRef = this.dialog.open(SelectJobsComponent, {
      data: selectedJobs || [],
    })

    return dialogRef.afterClosed()
  }
}
