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
  constructor(private httpClient: HttpClient) {}

  getStudent(
    studentId: number,
    courseId: number
  ): Observable<IStudentParticipant> {
    return this.httpClient.get<IStudentParticipant>(
      `${environment.baseUrl}/courses/${courseId}/student/${studentId}`
    )
  }
}
