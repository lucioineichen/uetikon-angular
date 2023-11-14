import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { StudentFormComponent } from './student-form.component'
import { IClass } from '../student/student.service'

@Injectable({
  providedIn: 'root',
})
export class StudentFormService {
  readonly classes$ = new BehaviorSubject<IClass[] | undefined>(undefined)

  constructor(private httpClient: HttpClient, private uiService: UiService) {}

  private getClasses() {
    return this.httpClient.get<IClass[]>(
      `${environment.baseUrl}/administrator/classes`
    )
  }

  updateClasses(dialogRef: MatDialogRef<StudentFormComponent>) {
    this.getClasses()
      .pipe(
        tap((classes) => this.classes$.next(classes)),
        catchError((err) => {
          this.classes$.error(err)
          dialogRef.close()
          this.uiService.showToast('Klassen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
