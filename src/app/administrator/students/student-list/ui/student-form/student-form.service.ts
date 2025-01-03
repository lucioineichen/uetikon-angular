import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { StudentFormComponent } from './student-form.component'
import { IClass } from '../../../student-detail/student.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class AddStudentService {
  readonly classes$ = new BehaviorSubject<IClass[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService,
    private dialog: MatDialog
  ) {}

  addStudent() {
    const dialogRef = this.dialog.open(StudentFormComponent)

    return dialogRef.afterClosed()
  }

  private getClasses() {
    return this.httpClient.get<IClass[]>(`${environment.baseUrl}/classes`)
  }

  updateClasses() {
    this.getClasses()
      .pipe(
        tap((classes) => this.classes$.next(classes)),
        catchError((err) => {
          this.classes$.error(err)
          this.uiService.showToast('Klassen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
