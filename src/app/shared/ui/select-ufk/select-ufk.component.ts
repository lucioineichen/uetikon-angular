import { Component, Inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { SelectUfkService } from './select-ufk.service'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  tap,
} from 'rxjs'
import {
  ICompetence,
  ISubject,
  ISubTopic,
} from '../../data/competences_data/competences.data'
import { filterNullish } from '../../utils/filternullish'
import { DialogService } from '../dialogs/ui.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-select-ufk',
  templateUrl: './select-ufk.component.html',
  styleUrls: ['./select-ufk.component.css'],
})
export class SelectUfkComponent {
  search = new FormControl('')
  ufkSubject$ = new BehaviorSubject<ISubject | undefined>(undefined)
  filtered$ = new BehaviorSubject<ICompetence[] | undefined>(undefined)
  selected$ = new BehaviorSubject<{ _id: string; name: string } | undefined>(
    undefined
  )

  constructor(
    private service: SelectUfkService,
    private ui: DialogService,
    @Inject(MAT_DIALOG_DATA) protected initUfk: string | undefined
  ) {}

  ngOnInit(): void {
    this.initSubject()
    this.listenToSearch()
    this.initSelected()
  }

  toggleSelection(comp: ICompetence, isChecked: boolean) {
    if (!isChecked) this.selected$.next(undefined)
    else this.selected$.next({ _id: comp._id, name: comp.name })
  }

  isSelected(comp: ICompetence) {
    return comp._id == this.selected$.value?._id
  }

  private initSelected() {
    if (!this.initUfk) return
    this.ufkSubject$
      .pipe(
        filterNullish(),
        map((subject) => this.extractCompetenceList(subject)),
        map((competences) =>
          competences.find((comp) => comp._id == this.initUfk)
        ),
        filterNullish(),
        map((comp) => {
          return { _id: comp._id, name: comp.name }
        }),
        tap((comp) => {
          this.selected$.next(comp)
        })
      )
      .subscribe()
  }

  private initSubject() {
    this.service
      .getSubject()
      .pipe(
        tap((subject) => this.ufkSubject$.next(subject)),
        catchError((err) => {
          this.ui.showToast('UFK konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private listenToSearch() {
    combineLatest([
      this.ufkSubject$.pipe(filterNullish()),
      this.search.valueChanges.pipe(startWith(''), distinctUntilChanged()),
    ])
      .pipe(
        map((d) => this.filterCompetences(d)),
        tap((filtered) => this.filtered$.next(filtered))
      )
      .subscribe()
  }

  private filterCompetences([subject, search]: [
    ISubject | undefined,
    string | null
  ]) {
    if (!subject || !search || search == '') return undefined
    return this.extractCompetenceList(subject).filter((competence) =>
      competence.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  private extractCompetenceList(subject: ISubject) {
    const topics = subject.topics

    const competences = topics.reduce(
      (competenceList, topic) => competenceList.concat(topic.competences!),
      [] as ICompetence[]
    )

    return competences
  }
}
