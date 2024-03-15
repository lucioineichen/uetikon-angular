import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Observable, map, mergeMap, of, tap } from 'rxjs'
import { AddTaskDialogComponent } from './add-task-dialog.component'
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

  addTask(jobId?: number): Observable<any | {}> {
    if (jobId) return this.addTaskToJob(jobId)

    return this.addTaskData()
  }

  private addTaskData(): Observable<any | undefined> {
    let dialogRef = this.dialog.open(AddTaskDialogComponent)

    return dialogRef.afterClosed()
  }

  private addTaskToJob(jobId: number): Observable<{}> {
    let dialogRef = this.dialog.open(AddTaskDialogComponent)

    return dialogRef.afterClosed().pipe(
      filterNullish(),
      mergeMap((data) => this.postTask(jobId, data)),
      tap(() => this.ui.showToast('Erfolgreich Aufgabe Hinzugefügt'))
    )
  }

  private postTask(jobId: number, data: any): Observable<{}> {
    console.log(data)
    return this.http.post<{}>(
      `${environment.baseUrl}/teacher/study-job/${jobId}/tasks`,
      data
    )
  }
}
