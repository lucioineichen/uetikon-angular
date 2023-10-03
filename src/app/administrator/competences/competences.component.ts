import { Component, OnInit } from '@angular/core'
import {
  CompetencesService,
  ICompetence,
  ISubject,
  ITopic,
} from './competences.service'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, combineLatest, filter, map, tap } from 'rxjs'

class TreeCompetence implements ICompetence {
  constructor(
    public _id: number,
    public name: string,
    public subCompetences: string[],
    public expanded = false
  ) {}

  static Build(data: ICompetence) {
    return new TreeCompetence(data._id, data.name, data.subCompetences)
  }
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styles: [
    `
      ::ng-deep .mat-mdc-select-panel {
        max-height: 800px !important;
      }
    `,
    `
      .choose-subject-form {
        width: 100%;
      }
      .choose-subject-form:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class CompetencesComponent implements OnInit {
  readonly subjects$ = this.serivce.subjects$
  readonly searchControl = new FormControl()
  readonly subjectControl = new FormControl()

  readonly selectedSubject$ = new BehaviorSubject<ISubject | undefined>(
    undefined
  )
  readonly competences$ = new BehaviorSubject<ICompetence[] | undefined>(
    undefined
  )
  readonly treeCompetences$ = this.competences$.pipe(
    map((competences) => competences?.map(TreeCompetence.Build))
  )

  constructor(private serivce: CompetencesService) {}

  init() {
    this.serivce.initCompetences()
  }

  subject(id: number) {
    return this.subjects$.value?.find((subject) => subject._id === id)
  }

  openSubject(id: number) {
    this.subjectControl.setValue(id)
  }

  ngOnInit(): void {
    this.serivce.updateCompetences()

    this.subjectControl.valueChanges
      .pipe(
        tap((id) =>
          this.selectedSubject$.next(
            this.subjects$.value?.find((subject) => subject._id === id)
          )
        )
      )
      .subscribe()

    combineLatest([this.searchControl.valueChanges, this.selectedSubject$])
      .pipe(
        filter(([search, subject]) => subject != undefined),
        tap(([search, subject]) => {
          if (search == '') console.log('now its undefined')
          if (search == '') {
            this.competences$.next(undefined)
            return
          }
          const allCompetences: ICompetence[] = []
          subject?.topics.forEach((topic) => {
            topic.subTopics?.forEach((subTopic) => {
              subTopic.competences.forEach((competence) => {
                allCompetences.push(competence)
              })
            })
            topic.competences?.forEach((competence) => {
              allCompetences.push(competence)
            })
          })
          this.competences$.next(
            allCompetences.filter((competence) =>
              competence.name.toLowerCase().includes(search.toLowerCase())
            )
          )
        })
      )
      .subscribe()
  }
}
