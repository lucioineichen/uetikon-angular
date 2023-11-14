import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  of,
  startWith,
  tap,
} from 'rxjs'
import { SelectCompetencesFormComponent } from './select-competences-form.component'
import { UiService } from '../ui.service'
import { CompetencesDataService } from 'src/app/competences_data/competences-data.service'
import { FormControl } from '@angular/forms'
import { SelectCompetence, SelectSubject } from './select-competences.interface'

@Injectable({
  providedIn: 'root',
})
export class SelectCompetencesService {
  readonly subjects$ = new BehaviorSubject<SelectSubject[] | undefined>(
    undefined
  )
  readonly selectedSubject$ = new BehaviorSubject<SelectSubject | undefined>(
    undefined
  )
  readonly searchControl = new FormControl()
  readonly subjectControl = new FormControl()
  readonly competences$ = new BehaviorSubject<SelectCompetence[] | undefined>(
    undefined
  )

  constructor(
    private dialog: MatDialog,
    private ui: UiService,
    private data: CompetencesDataService
  ) {}

  getSelectedCompetences() {
    return this.subjects$.value
      ?.reduce(
        (competences, subject) => competences.concat(subject.competences()),
        [] as SelectCompetence[]
      )
      .filter((competence) => competence.isSelected)
  }

  setCompetences() {
    combineLatest([
      this.searchControl.valueChanges.pipe(
        startWith(''),
        distinctUntilChanged(),
        filter((search) => {
          if (search != '') return true
          this.competences$.next(undefined)
          return false
        })
      ),
      this.selectedSubject$.pipe(filter((subject) => subject != undefined)),
    ])
      .pipe(
        map(([search, subject]) =>
          (subject as SelectSubject).competences(search)
        ),
        tap((competences) => this.competences$.next(competences))
      )
      .subscribe()
  }

  setSelectedSubject() {
    this.subjectControl.valueChanges
      .pipe(
        tap((id) => {
          const subject = this.subjects$.value?.find(
            (subject) => subject._id === id
          )
          this.selectedSubject$.next(subject)
        })
      )
      .subscribe()
  }

  updateCompetences() {
    of(this.data.get_competences())
      .pipe(
        tap((subjects) => {
          this.subjects$.next(subjects.map(SelectSubject.Build))
        }),
        catchError((err) => {
          this.subjects$.error(err)
          this.ui.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  selectCompetences() {
    const dialogRef = this.dialog.open(SelectCompetencesFormComponent)

    dialogRef.afterClosed().pipe(tap(console.info)).subscribe()
  }
}
