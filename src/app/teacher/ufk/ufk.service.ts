import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import {
  CompetencesDataService,
  IRawSubject,
} from 'src/app/shared/data/competences_data/competences-data.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { ICompetence, IFile, IRef } from 'src/app/shared/utils/interfaces'
import { IReflection } from 'src/app/student/competence/competences.component'

export interface IUfk {
  _id: number
  student: IRef
  teacher: IRef
  competence: ICompetence
  title: string
  grade: number
  text: string
  date: Date | string
  course?: IRef
  subject?: IRawSubject
  file: IFile
  reflection?: IReflection
}

@Injectable({
  providedIn: 'root',
})
export class UfkService {
  constructor(private http: HttpClient) {}

  postUfk(data: {
    form: {
      title: string
      grade: number
      student: number
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
    formData.append('student', JSON.stringify(data.form.student))
    formData.append('competence', data.form.competence)
    if (data.form.course)
      formData.append('course', JSON.stringify(data.form.course))
    if (data.form.subject)
      formData.append('subject', JSON.stringify(data.form.subject))
    if (data.form.comment) formData.append('comment', data.form.comment)

    return this.http.post(`${environment.baseUrl}/ufks`, formData)
  }

  deleteUfk(id: number) {
    return this.http.delete(`${environment.baseUrl}/ufks/${id}`)
  }

  getUfks(): Observable<IUfk[]> {
    return this.http.get<IUfk[]>(`${environment.baseUrl}/ufks`)
  }

  getFilteredUfks(
    student?: number,
    course?: number,
    subject?: number,
    competence?: string
  ) {
    let params = new HttpParams()
    if (student) params = params.set('student', student)
    if (course) params = params.set('course', course)
    if (subject) params = params.set('subject', subject)
    if (competence) params = params.set('competence', competence)

    return this.http.get<IUfk[]>(`${environment.baseUrl}/ufks`, { params })
  }
}
