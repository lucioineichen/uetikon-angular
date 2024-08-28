import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ChooseTeacherDialogComponent } from './choose-teacher-dialog.component'
import { BehaviorSubject, Observable, map } from 'rxjs'
import { IRef } from '../../utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class ChooseTeacherDialogService {
  readonly teacherList$ = new BehaviorSubject<IRef[]>([])

  constructor(private dialog: MatDialog) {}

  chooseTeacherList(teacherList?: IRef[]): Observable<IRef[] | undefined> {
    if (teacherList) this.teacherList$.next(teacherList)
    else this.teacherList$.next([])
    const dialogRef = this.dialog.open(ChooseTeacherDialogComponent)

    return dialogRef
      .afterClosed()
      .pipe(
        map((isConfirm) => (isConfirm ? this.teacherList$.value : undefined))
      )
  }
}
