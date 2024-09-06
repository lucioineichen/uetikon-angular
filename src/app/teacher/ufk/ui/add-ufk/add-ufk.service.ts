import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddUfkComponent } from './add-ufk.component'
import { FormControl, FormGroup } from '@angular/forms'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AddUfkService {
  constructor(private dialog: MatDialog) {}

  addUfk(): Observable<{
    form: {
      title: string
      grade: number
      student: number
      competence: string
      course: number | null
      subject: number | null
      comment: string | null
    }
    file: File | null
  }> {
    const dialogRef = this.dialog.open(AddUfkComponent)

    return dialogRef.afterClosed()
  }
}
