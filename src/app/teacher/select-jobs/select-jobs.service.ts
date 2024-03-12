import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { SelectJobsComponent } from './select-jobs.component'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class SelectJobsService {
  readonly jobs$ = new BehaviorSubject<IStudyJob[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService,
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
