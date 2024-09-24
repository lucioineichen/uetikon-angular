import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import {
  IProgress,
  IStudentCourse,
  IStudentParticipant,
} from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class StudentParticipantService {
  constructor(private http: HttpClient) {}

  getProgressList(studentId: number, courseId: number) {
    return this.http.get<IProgress[]>(
      `${environment.baseUrl}/course/${courseId}/student/${studentId}/progress`
    )
  }

  putTaskProgress(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${environment.baseUrl}/task-progress/${id}`,
      data
    )
  }

  getCourse(studentId: number, courseId: number) {
    return this.http.get<IStudentCourse>(
      `${environment.baseUrl}/student/${studentId}/course/${courseId}`
    )
  }
}
