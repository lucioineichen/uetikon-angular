import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  mergeMap,
  tap,
} from 'rxjs'
import { ICompetence } from '../interfaces'
import { HttpClient } from '@angular/common/http'
import { UiService } from '../common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { environment } from '../environment/environment.demo'
import { SelectCompetencesComponent } from '../teacher/select-competences-form/select-competences-form.component'
import { CompetenceFormComponent } from './competence-form/competence-form.component'

@Injectable({
  providedIn: 'root',
})
export class CompetenceService {
  readonly competences$ = new BehaviorSubject<ICompetence[] | undefined>(
    undefined
  )

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getCompetences(): Observable<ICompetence[]> {
    return this.httpClient.get<ICompetence[]>(
      `${environment.baseUrl}/competences`
    )
  }

  updateCompetences() {
    this.getCompetences()
      .pipe(
        tap((competences) => this.competences$.next(competences)),
        catchError((err) => {
          this.uiService.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private postCompetence(name: string, subject: string) {
    const formData: FormData = new FormData()

    formData.append('name', name)
    formData.append('subject', subject)

    return this.httpClient.post<ICompetence>(
      `${environment.baseUrl}/competences`,
      formData
    )
  }

  addCompetence() {
    const dialogRef = this.dialog.open(CompetenceFormComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data != undefined),
        mergeMap((data) => this.postCompetence(data.name, data.subject)),
        tap((competence) => this.competences$.value?.push(competence)),
        catchError((err) => {
          this.uiService.showToast('Kompetenz konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }
}
