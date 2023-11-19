import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { ICompetence } from 'src/app/interfaces'
import { SelectCompetencesComponent } from './select-competences-form.component'
import { CompetencesDataService } from 'src/app/competences_data/competences-data.service'

@Injectable({
  providedIn: 'root',
})
export class SelectCompetencesService {
  readonly competences$ = new BehaviorSubject<ICompetence[] | undefined>(
    undefined
  )

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog,
    private data: CompetencesDataService
  ) {}

  private getCompetences(): Observable<ICompetence[]> {
    return this.httpClient.get<ICompetence[]>(
      `${environment.baseUrl}/teacher/competences`
    )

    // return of(this.data.get_competences())
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

  selectCompetences(
    selectedCompetences?: ICompetence[],
    subject?: number
  ): Observable<ICompetence[] | ''> {
    this.updateCompetences()

    const dialogRef = this.dialog.open(SelectCompetencesComponent, {
      data: selectedCompetences || [],
    })

    return dialogRef.afterClosed()
  }
}
