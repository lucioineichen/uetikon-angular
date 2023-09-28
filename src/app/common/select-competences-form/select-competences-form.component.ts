import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, combineLatest, filter, map, tap } from 'rxjs'
import {
  ICompetence,
  ISubject,
} from 'src/app/administrator/competences/competences.service'
import { UiService } from '../ui.service'
import { SelectCompetencesService } from './select-competences.service'

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
  selector: 'app-select-competences-form',
  templateUrl: './select-competences-form.component.html',
  styleUrls: ['./select-competences-form.component.css'],
})
export class SelectCompetencesFormComponent {
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

  constructor(private serivce: SelectCompetencesService) {}

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
