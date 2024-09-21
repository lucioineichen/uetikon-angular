import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CompetencePathService {
  constructor(private http: HttpClient) {}

  deleteSelection(id: number) {
    return this.http.delete(`${environment.baseUrl}/job-selection/${id}`)
  }

  putPath(id: number, date?: string, job?: number) {
    return this.http.put(`${environment.baseUrl}/job-selection/${id}`, {
      deadline: date,
      job,
    })
  }

  postJobSelection(
    containerId: number,
    studentId: number,
    date: string,
    job?: number
  ) {
    return this.http.post(
      `${environment.baseUrl}/container/${containerId}/student/${studentId}/path`,
      job ? { deadline: date, job } : { deadline: date }
    )
  }
}
