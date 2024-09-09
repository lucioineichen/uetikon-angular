import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthService } from 'src/app/core/auth/auth.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ChoicePathService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  putPath(id: number, date?: string, job?: number) {
    return this.http.put(`${environment.baseUrl}/job-selection/${id}`, {
      deadline: date,
      job,
    })
  }

  postJobSelection(containerId: number, date: string, job?: number) {
    return this.http.post(
      `${environment.baseUrl}/container/${containerId}/student/${this.auth.currentUser$.value._id}/path`,
      job ? { deadline: date, job } : { deadline: date }
    )
  }
}
