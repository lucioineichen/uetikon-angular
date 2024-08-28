import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ChangeStatusComponent } from './change-status.component'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ChangeStatusService {
  constructor(private dialog: MatDialog) {}

  changeStatus(status?: number) {
    const dialogRef = this.dialog.open(ChangeStatusComponent, {
      data: { status: status },
    })

    return dialogRef
      .afterClosed()
      .pipe(map((newStatus) => (newStatus == status ? undefined : newStatus)))
  }
}
