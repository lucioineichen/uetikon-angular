import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IRef } from '../../utils/interfaces'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ChooseTeacherService {
  constructor(private http: HttpClient) {}

  getTeacherList() {
    let params = new HttpParams().set('format', 'ref')

    return this.http.get<IRef[]>(`${environment.baseUrl}/teachers`, {
      params: params,
    })
  }
}
