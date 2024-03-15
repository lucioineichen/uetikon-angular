import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable } from 'rxjs'
import { IFolder, IStudyJob } from 'src/app/shared/utils/interfaces'
import { ChooseJobComponent } from './choose-study-jobs-dialog.component'

@Injectable({
  providedIn: 'root',
})
export class ChooseJobService {
  readonly folders$ = new BehaviorSubject<IFolder | undefined>(undefined)
  readonly jobs$ = new BehaviorSubject<IStudyJob | undefined>(undefined)

  constructor(private dialog: MatDialog) {}

  openFolder() {}

  goToFolder(id: number) {}

  chooseJob(): Observable<undefined | number> {
    const dialogRef = this.dialog.open(ChooseJobComponent)

    return dialogRef.afterClosed()
  }
}
