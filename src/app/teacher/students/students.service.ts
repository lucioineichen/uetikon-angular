import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IStudent, Student } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  readonly students$ = new BehaviorSubject<IStudent[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService
  ) {}

  private getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(
      `${environment.baseUrl}/teacher/students`
    )
  }

  updateStudents() {
    this.getStudents()
      .pipe(
        map((students) => {
          return students.map(Student.Build)
        }),
        tap((students) => {
          this.students$.next(students)
        }),
        catchError((err) => {
          this.students$.error(err)
          this.uiService.showToast('Schüler konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
