import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'
import { IRef } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class GroupControlService {
  constructor(private http: HttpClient) {}

  getGroupList() {
    let params = new HttpParams()
    params.set('format', 'ref')
    params.set('self', true)
    return this.http.get<IRef[]>(`${environment.baseUrl}/groups`, { params })
  }

  getClassList() {
    let params = new HttpParams().set('format', 'ref')
    return this.http.get<IRef[]>(`${environment.baseUrl}/classes`, { params })
  }
}
