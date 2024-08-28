import { Injectable } from '@angular/core'
import { UfkService } from '../../../ufk/ufk.service'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class TeacherControlService {
  constructor(private http: HttpClient) {}

  getTeachers(): Observable<{ _id: number; name: string }[]> {
    let params = new HttpParams().set('format', 'ref')
    return this.http.get<{ _id: number; name: string }[]>(
      `${environment.baseUrl}/teachers`,
      { params }
    )
  }
}
