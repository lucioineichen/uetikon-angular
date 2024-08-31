import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
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
    return this.httpClient
      .get<IStudentParticipant>(
        `${environment.baseUrl}/courses/${courseId}/student/${studentId}`
      )
      .pipe(tap(console.info))
  }

  putTaskProgress(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(
      `${environment.baseUrl}/task-progress/${id}`,
      data
    )
  }
}
