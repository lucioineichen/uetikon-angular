import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
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
import { SelectSubject } from './select-competences.interface'
import { ICompetence } from 'src/app/competences_data/competences.data'
import { MatCheckboxChange } from '@angular/material/checkbox'

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
  readonly competences$ = new BehaviorSubject<ICompetence[] | undefined>(
    undefined
  )
  readonly selected$ = new BehaviorSubject<string[]>([])

  constructor(
    private dialog: MatDialog,
    private ui: UiService,
    private data: CompetencesDataService
  ) {
    this.setSelectedSubject()
    this.setCompetences()
  }

  isSelected(id: string) {
    return this.selected$.value.findIndex((selc) => selc === id) > -1
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
          (subject as SelectSubject).getCompetences(search)
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
          this.searchControl.setValue('')
        })
      )
      .subscribe()
  }

  updateCompetences(competenceIds?: string[], subjectId?: string) {
    of(this.data.get_competences())
      .pipe(
        map((subjects) => subjects.map(SelectSubject.Build)),
        tap((subjects) => this.subjects$.next(subjects)),
        tap((subjects) => {
          if (!competenceIds) return
          const competences = subjects
            .reduce(
              (array, subj) => array.concat(subj.getCompetences()),
              [] as ICompetence[]
            )
            .filter(
              (comp) => competenceIds.findIndex((id) => id === comp._id) > -1
            )
          this.selected$.next(competences.map((comp) => comp._id))
        }),
        tap((subjects) => {
          if (subjectId) this.subjectControl.setValue(subjectId)
        }),
        catchError((err) => {
          this.subjects$.error(err)
          this.ui.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private getAllCompetences(): ICompetence[] | undefined {
    const competences = this.subjects$.value?.reduce(
      (array, subj) => array.concat(subj.getCompetences()),
      [] as ICompetence[]
    )
    return competences
  }

  private getSelectedCompetences(): ICompetence[] | undefined {
    return this.getAllCompetences()?.filter(
      (comp) => this.selected$.value.findIndex((id) => comp._id === id) > -1
    )
  }

  selectCompetences(
    competences?: string[],
    subjectId?: string
  ): Observable<ICompetence[] | undefined> {
    console.log(competences)

    this.updateCompetences(competences, subjectId)

    const dialogRef = this.dialog.open(SelectCompetencesFormComponent)

    return dialogRef
      .afterClosed()
      .pipe(
        map((isConfirm) =>
          isConfirm ? this.getSelectedCompetences() : undefined
        )
      )
  }

  openSubject(id: string) {
    this.subjectControl.setValue(id)
  }

  toggleSelection(event: MatCheckboxChange, id: string): void {
    if (event.checked && !this.selected$.value.find((_id) => _id === id)) {
      this.selected$.value.push(id)
    }
    if (!event.checked) {
      this.selected$.next(this.selected$.value.filter((_id) => _id !== id))
    }
  }
}
