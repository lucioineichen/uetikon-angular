import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'
import { IReflection } from '../../competences.component'

@Injectable({
  providedIn: 'root',
})
export class UfkReflectionTableService {
  constructor(private http: HttpClient) {}

  postReflection(
    data: {
      form: {
        title: string
        grade: number
        competence: string
        course: number | null
        subject: number | null
        comment: string | null
      }
      file: File | null
    },
    ufkId: number
  ) {
    const formData = new FormData()
    if (data.file) formData.append('file', data.file)
    formData.append('grade', JSON.stringify(data.form.grade))
    if (data.form.comment) formData.append('comment', data.form.comment)

    return this.http.post<IReflection>(
      `${environment.baseUrl}/ufk/${ufkId}/reflections`,
      formData
    )
  }
}
