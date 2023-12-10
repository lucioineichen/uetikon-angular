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
    private data: CompetencesDataService,
    private ui: UiService
  ) {}

  init() {
    this.httpClient
      .post<ICompetence[]>(
        `${environment.baseUrl}/administrator/competences/init`,
        { subjects: this.data.get_competences() }
      )
      .pipe(
        tap(() => this.ui.showToast('Erfolgreich Kompetenzen Initialisiert')),
        catchError((err) => {
          this.ui.showToast(
            'Fehler: Kompetenzen konnten nicht initalisiert werden'
          )
          return err
        })
      )
      .subscribe()
  }
}
