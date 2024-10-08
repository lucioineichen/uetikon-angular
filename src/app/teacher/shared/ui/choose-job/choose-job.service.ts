import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, filter, map, tap } from 'rxjs'
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'
import { ChooseJobComponent } from './choose-study-jobs-dialog.component'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { ConfirmJobComponent } from './confirm-job/confirm-job.component'
import { DialogRef } from '@angular/cdk/dialog'
import { IAbstractFolder } from 'src/app/shared/ui/choose-folder/choose-folder.service'

@Injectable({
  providedIn: 'root',
})
export class ChooseJobService {
  readonly folder$ = new BehaviorSubject<undefined | IAbstractFolder>(undefined)
  readonly job$ = new BehaviorSubject<undefined | IStudyJob>(undefined)

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  openFolder(id: number) {
    this.getFolder(id)
      .pipe(
        tap(console.info),
        tap((folder) => {
          this.folder$.next(folder)
        }),
        catchError((err, caught) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  openShareFolder(id: number) {
    this.getShareFolder(id)
      .pipe(
        tap((folder) => {
          this.folder$.next(folder)
        }),
        catchError((err, caught) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  confirmJob(job: IStudyJob) {
    this.job$.next(job)

    return this.dialog.open(ConfirmJobComponent).afterClosed()
  }

  chooseJob(): Observable<IStudyJob | undefined> {
    this.openFolder(0)
    const dialogRef = this.dialog.open(ChooseJobComponent)

    return dialogRef.afterClosed()
  }

  private getShareFolder(id: number): Observable<IAbstractFolder> {
    return this.http.get<IAbstractFolder>(
      `${environment.baseUrl}/share-folders/${id}`
    )
  }

  private getFolder(id?: number): Observable<IAbstractFolder> {
    if (id && id != 0)
      return this.http.get<IAbstractFolder>(
        `${environment.baseUrl}/store-folders/${id}`
      )

    return this.http.get<IAbstractFolder>(`${environment.baseUrl}/folders/root`)
  }
}
