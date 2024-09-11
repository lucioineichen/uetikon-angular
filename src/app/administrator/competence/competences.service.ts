import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { CompetencesDataService } from 'src/app/shared/data/competences_data/competences-data.service'
import {
  ICompetence,
  ISubject,
} from 'src/app/shared/data/competences_data/competences.data'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  readonly subjects$ = new BehaviorSubject<ISubject[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private data: CompetencesDataService,
    private ui: DialogService
  ) {}

  init() {
    this.httpClient
      .put<ICompetence[]>(`${environment.baseUrl}/competences`, {
        subjects: this.data.get_competences(),
      })
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
