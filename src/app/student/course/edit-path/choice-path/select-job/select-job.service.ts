import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { SelectJobComponent } from './select-job.component'

@Injectable({
  providedIn: 'root',
})
export class SelectJobService {
  constructor(private dialog: MatDialog) {}

  selectJob(
    choices: IStudyJob[],
    job?: number,
    deadline?: string
  ): Observable<{ job: number; deadline: string } | undefined> {
    const dialogRef = this.dialog.open(SelectJobComponent, {
      data: {
        choices,
        job,
        deadline,
      },
    })

    return dialogRef.afterClosed()
  }
}
