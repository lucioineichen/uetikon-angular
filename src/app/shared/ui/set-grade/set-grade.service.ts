import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { SetGradeComponent } from './set-grade.component'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SetGradeService {
  constructor(private dialog: MatDialog) {}

  setGrade(message: string, grade?: number): Observable<number | undefined> {
    const dialogRef = this.dialog.open(SetGradeComponent, {
      data: { message, grade },
    })

    return dialogRef.afterClosed()
  }
}
