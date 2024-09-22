import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/core/auth/auth.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IUfk } from 'src/app/teacher/ufk/ufk.service'
import { IReflection } from './competences.component'

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getTree() {
    return this.http.get<any>(`${environment.baseUrl}/competence-tree`)
  }

  getUfks(): Observable<IUfk[]> {
    return this.http.get<IUfk[]>(
      `${environment.baseUrl}/student/${this.auth.currentUser$.value?._id}/ufks`
    )
  }

  getReflections(): Observable<IReflection[]> {
    return this.http.get<IReflection[]>(
      `${environment.baseUrl}/student/${this.auth.currentUser$.value?._id}/single-reflections`
    )
  }

  postReflection(data: {
    form: {
      title: string
      grade: number
      competence: string
      course: number | null
      subject: number | null
      comment: string | null
    }
    file: File | null
  }) {
    const formData = new FormData()
    if (data.file) formData.append('file', data.file)
    formData.append('title', data.form.title)
    formData.append('grade', JSON.stringify(data.form.grade))
    formData.append('competence', data.form.competence)
    if (data.form.course)
      formData.append('course', JSON.stringify(data.form.course))
    if (data.form.subject)
      formData.append('subject', JSON.stringify(data.form.subject))
    if (data.form.comment) formData.append('comment', data.form.comment)

    return this.http.post(`${environment.baseUrl}/reflections`, formData)
  }
}
