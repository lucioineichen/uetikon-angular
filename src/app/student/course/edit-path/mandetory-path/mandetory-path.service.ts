import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthService } from 'src/app/core/auth/auth.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class MandetoryPathService {
  constructor(private http: HttpClient) {}

  putPath(id: number, date: string) {
    return this.http.put(`${environment.baseUrl}/job-selection/${id}`, {
      deadline: date,
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
