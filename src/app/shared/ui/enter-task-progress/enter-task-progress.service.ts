import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs/internal/Observable'
import { EnterTaskProgressComponent } from './enter-task-progress.component'
import { ITaskProgress } from '../../utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class EnterTaskProgressService {
  constructor(private dialog: MatDialog) {}

  enterTaskProgress(taskProg: ITaskProgress): Observable<{grade: number} | {completed: boolean} | undefined> {
    const dialogRef = this.dialog.open(EnterTaskProgressComponent, {
      data: taskProg,
    })

    return dialogRef.afterClosed()
  }
}
