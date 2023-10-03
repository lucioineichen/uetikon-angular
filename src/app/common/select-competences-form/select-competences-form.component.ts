import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  startWith,
  tap,
  throttleTime,
} from 'rxjs'
import {
  ICompetence,
  ISubTopic,
  ISubject,
  ITopic,
} from 'src/app/administrator/competences/competences.service'
import { UiService } from '../ui.service'
import { SelectCompetencesService } from './select-competences.service'
import { MatDialogRef } from '@angular/material/dialog'

export class TreeCompetence implements ICompetence {
  get subCompetences() {
    throw Error('no sub competences on TreeCompetence')
    return []
  }
  constructor(
    public _id: number,
    public name: string,
    public isSelected: boolean = false
  ) {}

  static Build(data: ICompetence) {
    return new TreeCompetence(data._id, data.name)
  }
}

export class TreeSubTopic implements ISubTopic {
  constructor(
    public _id: number,
    public name: string,
    public competences: TreeCompetence[],
    public expanded = false
  ) {}

  static Build(data: ISubTopic) {
    return new TreeSubTopic(
      data._id,
      data.name,
      data.competences.map(TreeCompetence.Build)
    )
  }
}

export class Topic implements ITopic {
  constructor(
    public _id: number,
    public name: string,
    public subTopics?: TreeSubTopic[],
    public competences?: TreeCompetence[],
    public expanded = false
  ) {}

  static Build(data: ITopic): Topic {
    return new Topic(
      data._id,
      data.name,
      data.subTopics?.map(TreeSubTopic.Build),
      data.competences?.map(TreeCompetence.Build)
    )
  }
}

export class Subject implements ISubject {
  constructor(
    public _id: number,
    public name: string,
    public topics: Topic[]
  ) {}

  static Build(data: ISubject): Subject {
    return new Subject(data._id, data.name, data.topics.map(Topic.Build))
  }
}

@Component({
  selector: 'app-select-competences-form',
  templateUrl: './select-competences-form.component.html',
  styleUrls: ['./select-competences-form.component.css'],
})
export class SelectCompetencesFormComponent {
  readonly subjects$ = this.serivce.subjects$
  readonly searchControl = new FormControl()
  readonly subjectControl = new FormControl()

  readonly selectedSubject$ = new BehaviorSubject<undefined | Subject>(
    undefined
  )

  readonly searchedCompetences$ = new BehaviorSubject<
    TreeCompetence[] | undefined
  >(undefined)

  readonly allSubjects$ = new BehaviorSubject<Subject[] | undefined>(undefined)

  constructor(
    private serivce: SelectCompetencesService,
    public dialogRef: MatDialogRef<SelectCompetencesFormComponent>
  ) {}

  subject(id: number) {
    return this.subjects$.value?.find((subject) => subject._id === id)
  }

  openSubject(id: number) {
    this.subjectControl.setValue(id)
  }

  ngOnInit(): void {
    this.serivce.updateCompetences()

    this.subjects$
      .pipe(
        map((subjects) => subjects?.map(Subject.Build)),
        tap(() => console.log('next allSubjects$')),
        tap(console.log),
        tap((subjects) => this.allSubjects$.next(subjects)),
        catchError((err) => {
          this.dialogRef.close()
          return err
        })
      )
      .subscribe()

    this.subjectControl.valueChanges
      .pipe(
        tap((id) => {
          const subject = this.subjects$.value?.find(
            (subject) => subject._id === id
          )
          if (!subject) {
            this.selectedSubject$.next(undefined)
            return
          }
          this.selectedSubject$.next(Subject.Build(subject))
        })
      )
      .subscribe()

    combineLatest([
      this.searchControl.valueChanges.pipe(
        startWith(''),
        tap((search) => {
          if (search == '') this.searchedCompetences$.next(undefined)
        }),
        distinctUntilChanged(),

        filter((search) => search != '')
      ),
      this.selectedSubject$.pipe(
        filter((subject) => subject != undefined),
        map((subject_: any) => {
          const subject = subject_ as ISubject
          const competences = subject?.topics.reduce((pre, cur) => {
            const subTopics = cur.subTopics as ISubTopic[]
            const competences = cur.competences as ICompetence[]
            return pre.concat(
              subTopics.reduce((previous, current) => {
                return previous.concat(current.competences)
              }, [] as ICompetence[]) || competences
            )
          }, [] as ICompetence[])

          return competences
        })
      ),
    ])
      .pipe(
        map(([search, competences]) => {
          return competences.filter((competence: ICompetence) =>
            competence.name.toLowerCase().includes(search.toLowerCase())
          )
        }),
        map((competences) => competences.map(TreeCompetence.Build)),
        tap((competences) => this.searchedCompetences$.next(competences)),
        tap((competences) => console.log('updated searchedCompetences'))
      )
      .subscribe()
  }

  getSelectedCompetences() {
    console.log('getSelectedCompetences')
    const searchedCompetences = this.searchedCompetences$.value
    if (searchedCompetences) {
      console.log('in searchedCompetences')
      return searchedCompetences.filter((competence) => competence.isSelected)
    }
    const selectedSubject = this.selectedSubject$.value
    if (selectedSubject) {
      console.log('in selectedSubject')
      return selectedSubject.topics
        .reduce((pre, cur) => {
          const subTopics = cur.subTopics as TreeSubTopic[]
          const competences = cur.competences as TreeCompetence[]
          return pre.concat(
            subTopics.reduce((previous, current) => {
              return previous.concat(current.competences)
            }, [] as TreeCompetence[]) || competences
          )
        }, [] as TreeCompetence[])
        .filter((competence) => competence.isSelected)
    }
    const allSubjects = this.allSubjects$.value
    if (allSubjects) {
      return allSubjects
        .reduce((pre, cur) => {
          return pre.concat(
            cur.topics.reduce((pre, cur) => {
              const subTopics = cur.subTopics
              const competences = cur.competences
              if (subTopics) {
                return pre.concat(
                  subTopics.reduce((previous, current) => {
                    return previous.concat(current.competences)
                  }, [] as TreeCompetence[])
                )
              }
              if (competences) {
                return pre.concat(competences)
              }
              return pre
            }, [] as TreeCompetence[])
          )
        }, [] as TreeCompetence[])
        .filter((competence) => competence.isSelected)
    }
    return [] as TreeCompetence[]
  }

  close() {
    this.dialogRef.close(this.getSelectedCompetences())
  }
}
