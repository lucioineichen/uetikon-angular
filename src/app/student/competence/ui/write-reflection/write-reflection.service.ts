import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { WriteReflectionComponent } from './write-reflection.component'
import { IUfk } from 'src/app/teacher/ufk/ufk.service'

@Injectable({
  providedIn: 'root',
})
export class WriteReflectionService {
  constructor(private dialog: MatDialog) {}

  writeReflection(ufk?: IUfk): Observable<{
    form: {
      title: string
      grade: number
      competence: string
      course: number | null
      subject: number | null
      comment: string | null
    }
    file: File | null
  }> {
    const dialogRef = this.dialog.open(WriteReflectionComponent, { data: ufk })

    return dialogRef.afterClosed()
  }
}
