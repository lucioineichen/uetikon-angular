import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { AddCompetencePathComponent } from './add-competence-path.component'

@Injectable({
  providedIn: 'root',
})
export class AddCompetencePathService {
  constructor(private dialog: MatDialog) {}

  addSel(): Observable<{ job: number; deadline: string } | undefined> {
    const dialogRef = this.dialog.open(AddCompetencePathComponent)

    return dialogRef.afterClosed()
  }
}
