import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'
import { IProgress } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class JobCorrectionService {
  constructor(private http: HttpClient) {}

  getProgress(studentId: number, jobId: number) {
    return this.http.get<IProgress>(
      `${environment.baseUrl}/student/${studentId}/job/${jobId}/progress`
    )
  }
}
