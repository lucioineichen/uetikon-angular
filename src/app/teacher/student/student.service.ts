import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { IStudent, Student } from 'src/app/interfaces'

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student$ = new BehaviorSubject<IStudent | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private uiService: UiService
  ) {}

  private getStudent(studentId: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>(
      `${environment.baseUrl}/teacher/student/${studentId}`
    )
  }

  updateStudent(studentId: number) {
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
