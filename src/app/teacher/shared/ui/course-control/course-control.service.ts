import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'
import { IRef } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class CourseControlService {
  constructor(private http: HttpClient) {}

  getCourseList() {
    let params = new HttpParams()
    params.set('format', 'ref')
    params.set('self', true)
    return this.http.get<IRef[]>(`${environment.baseUrl}/courses`, { params })
  }
}
