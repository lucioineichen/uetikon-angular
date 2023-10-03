import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { ISubject } from 'src/app/administrator/competences/competences.service'
import { environment } from 'src/app/environment/environment.demo'
import { SelectCompetencesFormComponent } from './select-competences-form.component'

@Injectable({
  providedIn: 'root',
})
export class SelectCompetencesService {
  readonly subjects$ = new BehaviorSubject<ISubject[] | undefined>(undefined)

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient,
    private dialog: MatDialog
  ) {}

  private getCompetences() {
    return this.httpClient.get<ISubject[]>(
      `${environment.baseUrl}/administrator/competences`
    )
  }

  updateCompetences() {
    this.getCompetences()
      .pipe(
        tap((subjects) => {
          this.subjects$.next(subjects)
        }),
        catchError((err) => {
          this.subjects$.error(err)
          this.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  showToast(message: string, action = 'Close', config?: MatSnackBarConfig) {
    this.snackBar.open(message, action, config || { duration: 7000 })
  }

  selectCompetences() {
    const dialogRef = this.dialog.open(SelectCompetencesFormComponent)

    dialogRef.afterClosed().pipe(tap(console.info)).subscribe()
  }
}
