import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'
import { IJobSelection } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class StudyPathService {
  constructor(private http: HttpClient) {}

  getPath(courseId: number, studentId: number) {
    return this.http.get<IJobSelection[]>(
      `${environment.baseUrl}/course/${courseId}/student/${studentId}/path`
    )
  }
}
