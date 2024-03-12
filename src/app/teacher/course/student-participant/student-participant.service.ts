import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IStudentParticipant } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class StudentParticipantService {
  student$ = new BehaviorSubject<IStudentParticipant | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private uiService: DialogService
  ) {}

  private getStudent(
    studentId: number,
    courseId: number
  ): Observable<IStudentParticipant> {
    return this.httpClient.get<IStudentParticipant>(
      `${environment.baseUrl}/teacher/course/${courseId}/student${studentId}`
    )
  }

  updatePath(studentId: number, courseId: number) {
    this.getStudent(studentId, courseId).pipe(
      tap((student) => this.student$.next(student)),
      catchError((err) => {
        this.uiService.showToast('Schüler konnten nicht geladen werden')
        return err
      })
    )
  }
}
