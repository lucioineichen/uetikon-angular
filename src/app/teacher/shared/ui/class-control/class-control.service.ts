import { Injectable } from '@angular/core'
import { UfkService } from '../../../ufk/ufk.service'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ClassControlService {
  constructor(private http: HttpClient) {}

  getClasses() {
    let params = new HttpParams().set('format', 'primary')
    return this.http.get<{
      primary: { _id: number; name: string }
      classes: { _id: number; name: string }[]
    }>(`${environment.baseUrl}/classes`, { params })
  }
}
