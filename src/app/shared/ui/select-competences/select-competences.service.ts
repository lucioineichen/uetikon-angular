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
import { CompetencesDataService } from 'src/app/shared/data/competences_data/competences-data.service'
import { FormControl } from '@angular/forms'
import {
  ICompetence,
  ISubCompetence,
} from 'src/app/shared/data/competences_data/competences.data'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { SelectCompetence, SelectSubject } from './select-competences.interface'
import { SelectCompetencesComponent } from './select-competences.component'

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
  readonly filteredCompetences$ = new BehaviorSubject<
    | { subCompetences: ISubCompetence[]; competences: SelectCompetence[] }
    | undefined
  >(undefined)
  readonly selectedSubs$ = new BehaviorSubject<string[]>([])

  constructor(
    private dialog: MatDialog,
    private ui: DialogService,
    private data: CompetencesDataService
  ) {
    this.setSelectedSubject()
    this.filterCompetences()
  }

  isSelectedSub(id: string) {
    return this.selectedSubs$.value.findIndex((selc) => selc === id) > -1
  }

  isSelectedComp(comp: SelectCompetence) {
    let ids = comp.subCompetences.map((sub) => sub._id)
    for (let id of ids) {
      if (!this.isSelectedSub(id)) {
        return false
      }
    }
    return true
  }

  private filterCompetences() {
    combineLatest([
      this.searchControl.valueChanges.pipe(
        startWith(''),
        distinctUntilChanged(),
        filter((search) => {
          if (search != '') return true
          this.filteredCompetences$.next(undefined)
          return false
        })
      ),
      this.selectedSubject$.pipe(filter((subject) => subject != undefined)),
    ])
      .pipe(
        map(([search, subject]) => {
          if (!subject) return [search, subject]
          let subCompetences = subject.filterSubCompetences(search)
          let competences = subject.filterCompetences(search)
          if (search === 'respekt') console.log(subCompetences)
          return [search, { subCompetences, competences }]
        }),
        tap(([search, competences]) => {
          if (!search || search == '' || search === ' ')
            this.filteredCompetences$.next(undefined)
          else this.filteredCompetences$.next(competences)
        })
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

  updateCompetences(subIds?: string[], subjectId?: string) {
    of(this.data.get_competences())
      .pipe(
        tap(() => {
          this.filteredCompetences$.next(undefined)
          this.searchControl.setValue(undefined)
          if (!subIds) this.selectedSubs$.next([])
          else {
            this.selectedSubs$.next(subIds)
          }
        }),
        map((subjects) => subjects.map(SelectSubject.Build)),
        tap((subjects) => this.subjects$.next(subjects)),
        tap(() => {
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

  private allSubCompetences(subjects: SelectSubject[]): ISubCompetence[] {
    return subjects.reduce(
      (array, subj) => array.concat(subj.filterSubCompetences()),
      [] as ISubCompetence[]
    )
  }

  private allcompetences(subjects: SelectSubject[]): SelectCompetence[] {
    return subjects.reduce(
      (array, subj) => array.concat(subj.filterCompetences()),
      [] as SelectCompetence[]
    )
  }

  selectCompetences(
    competences?: string[],
    subjectId?: string
  ): Observable<
    { competences: ICompetence[]; subCompetences: ISubCompetence[] } | undefined
  > {
    this.updateCompetences(competences, subjectId)

    const dialogRef = this.dialog.open(SelectCompetencesComponent)

    return dialogRef.afterClosed().pipe(
      map((isConfirm) => {
        if (!isConfirm || !this.subjects$.value) return undefined
        let subs = this.allSubCompetences(this.subjects$.value).filter(
          (sub) =>
            this.selectedSubs$.value.findIndex((selId) => sub._id === selId) >
            -1
        )
        let comps = this.allcompetences(this.subjects$.value).filter((comp) => {
          let allSubsSelected = true
          comp.subCompetences.forEach((sub) => {
            if (subs.findIndex((_sub) => _sub._id === sub._id) === -1)
              allSubsSelected = false
          })
          return allSubsSelected
        })
        return {
          competences: comps,
          subCompetences: subs,
        }
      })
    )
  }

  openSubject(id: string) {
    this.subjectControl.setValue(id)
  }

  toggleSubSelection(event: MatCheckboxChange, id: string): void {
    if (
      event.checked &&
      this.selectedSubs$.value.findIndex((_id) => _id === id) === -1
    ) {
      this.selectedSubs$.next(this.selectedSubs$.value.concat(id))
    }
    if (!event.checked) {
      this.selectedSubs$.next(
        this.selectedSubs$.value.filter((_id) => _id !== id)
      )
    }
  }

  toggleCompSelection(event: MatCheckboxChange, comp: SelectCompetence): void {
    if (event.checked) {
      let newSubs: string[] = []
      comp.subCompetences.forEach((sub) => {
        if (this.selectedSubs$.value.findIndex((sel) => sel === sub._id) === -1)
          newSubs.push(sub._id)
      })
      this.selectedSubs$.next(this.selectedSubs$.value.concat(newSubs))
    }
    if (!event.checked) {
      this.selectedSubs$.next(
        this.selectedSubs$.value.filter(
          (sub) =>
            comp.subCompetences.findIndex((_sub) => _sub._id === sub) === -1
        )
      )
    }
  }
}
