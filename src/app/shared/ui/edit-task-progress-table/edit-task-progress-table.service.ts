import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class EditTaskProgressTableService {
  constructor(private http: HttpClient) {}

  putTaskProgress(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${environment.baseUrl}/task-progress/${id}`,
      data
    )
  }
}
