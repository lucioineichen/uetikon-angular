import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { PlanDateComponent } from './plan-date.component'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PlanDateService {
  constructor(private dialog: MatDialog) {}

  planDate(): Observable<Date | undefined> {
    const dialogRef = this.dialog.open(PlanDateComponent)

    return dialogRef.afterClosed()
  }
}
