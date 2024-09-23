import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { TaskFormComponent } from './task-form.component'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { catchError, mergeMap, tap } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import { ITask } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class TaskFormService {
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private ui: DialogService
  ) {}

  editTask(task?: ITask) {
    let dialogRef = this.dialog.open(TaskFormComponent, { data: task })

    return dialogRef
      .afterClosed()
  }
}
