import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IStudent, Student } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student$ = new BehaviorSubject<IStudent | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService
  ) {}

  private getStudent(studentId: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>(
      `${environment.baseUrl}/teacher/student/${studentId}`
    )
  }

  updateStudent(studentId: number) {
    console.log(studentId)
    this.getStudent(studentId)
      .pipe(
        map(Student.Build),
        tap((student) => this.student$.next(student)),
        catchError((err) => {
          this.uiService.showToast('Schüler konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
