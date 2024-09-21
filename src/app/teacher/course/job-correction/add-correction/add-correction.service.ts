import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddCorrectionComponent } from './add-correction.component'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AddCorrectionService {
  constructor(private dialog: MatDialog) {}

  addCorrection(
    name: string
  ): Observable<{ file: File | null; text?: string }> {
    const dialogRef = this.dialog.open(AddCorrectionComponent, { data: name })

    return dialogRef.afterClosed()
  }
}
