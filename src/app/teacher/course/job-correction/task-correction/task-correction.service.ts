import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'
import { ICorrection, ISubmission } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class TaskCorrectionService {
  constructor(private http: HttpClient) {}

  putTaskProgress(id: number, data: any) {
    return this.http.put<any>(
      `${environment.baseUrl}/task-progress/${id}`,
      data
    )
  }

  postCorrection(
    submissionId: number,
    data: { file: File | null; text?: string }
  ) {
    const formData = new FormData()
    if (data.file) formData.append('file', data.file)
    if (data.text) formData.append('text', data.text)

    return this.http.post<ICorrection>(
      `${environment.baseUrl}/submission/${submissionId}/corrections`,
      formData
    )
  }
}
