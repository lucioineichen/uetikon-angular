import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  constructor(private httpClient: HttpClient) {}

  getTree() {
    return this.httpClient.get<any>(`${environment.baseUrl}/competence-tree`)
  }
}
