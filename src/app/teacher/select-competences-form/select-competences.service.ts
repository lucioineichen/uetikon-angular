import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { ICompetence } from 'src/app/interfaces'
import { SelectCompetencesComponent } from './select-competences-form.component'
import { CompetencesDataService } from 'src/app/shared/data/competences_data/competences-data.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class SelectCompetencesService {
  readonly competences$ = new BehaviorSubject<ICompetence[] | undefined>(
    undefined
  )

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService,
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
