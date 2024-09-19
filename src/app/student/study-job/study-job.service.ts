import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import { IProgress, IStudyJob } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class StudyJobService {
  constructor(private http: HttpClient) {}

  getProgress(jobId: number) {
    return this.http.get<IProgress>(
      `${environment.baseUrl}/job/${jobId}/progress`
    )
  }

  putTaskProgress(id: number, data: any) {
    return this.http.put<any>(
      `${environment.baseUrl}/task-progress/${id}`,
      data
    )
  }
}
