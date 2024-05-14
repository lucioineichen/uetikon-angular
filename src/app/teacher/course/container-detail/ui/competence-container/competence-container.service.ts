import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CompetenceContainerService {
  constructor(private http: HttpClient) {}

  putCompetenceList(id: number, list: string[]) {
    this.http
      .put(`${environment.baseUrl}/container/${id}`, {
        competenceList: list,
      })
      .subscribe()
  }
}
