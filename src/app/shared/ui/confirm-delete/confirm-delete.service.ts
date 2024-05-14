import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDeleteComponent } from './confirm-delete.component'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeleteService {
  constructor(private dialog: MatDialog) {}

  confirmDelete(objectName: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: { objectName },
    })

    return dialogRef.afterClosed()
  }
}
