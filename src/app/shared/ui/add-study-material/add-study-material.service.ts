import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { AddStudyMaterialComponent } from './add-study-material.component'

@Injectable({
  providedIn: 'root',
})
export class AddStudyMaterialService {
  constructor(private dialog: MatDialog) {}

  addStudyMaterial(): Observable<File | undefined> {
    const dialogRef = this.dialog.open(AddStudyMaterialComponent)

    return dialogRef.afterClosed()
  }
}
