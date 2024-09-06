import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs'
import { AddTaskComponent } from './add-task-dialog.component'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class AddTaskService {
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private ui: DialogService
  ) {}

  addTask(jobId: number) {
    let dialogRef = this.dialog.open(AddTaskComponent)

    return dialogRef.afterClosed().pipe(
      tap(console.info),
      filterNullish(),
      mergeMap((data) => this.postTask(jobId, data)),
      tap(() => this.ui.showToast('Erfolgreich Aufgabe Hinzugefügt')),
      catchError((err) => {
        this.ui.showToast('Aufgabe konnte nicht hinzugefügt werden')
        return err
      })
    )
  }

  private postTask(jobId: number, data: any) {
    return this.http.post(
      `${environment.baseUrl}/study-jobs/${jobId}/tasks`,
      data
    )
  }
}
