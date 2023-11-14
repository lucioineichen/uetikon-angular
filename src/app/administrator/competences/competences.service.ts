import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { CompetencesDataService } from 'src/app/competences_data/competences-data.service'
import {
  ICompetence,
  ISubject,
} from 'src/app/competences_data/competences.data'
import { environment } from 'src/app/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  readonly subjects$ = new BehaviorSubject<ISubject[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  deleteCompetence(id: number) {
    return this.httpClient.delete<ICompetence[]>(
      `${environment.baseUrl}/administrator/competences/${id}`
    )
  }

  putCompetence(data: any, id: number) {
    return this.httpClient.put<ICompetence[]>(
      `${environment.baseUrl}/administrator/competences/${id}`,
      data
    )
  }
}
