import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { BehaviorSubject, tap } from 'rxjs'
import { CompetencesDataService } from 'src/app/shared/data/competences_data/competences-data.service'
import {
  ISubTopic,
  ISubject,
} from 'src/app/shared/data/competences_data/competences.data'
import { PickCompetenceListService } from 'src/app/shared/ui/pick-competence-list/pick-competence-list.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { IStudyJob, IStringRef } from 'src/app/shared/utils/interfaces'
import { SubSink } from 'subsink'
import { CompetenceContainerService } from './competence-container.service'

@Component({
  selector: 'app-competence-container',
  template: `
    <mat-card class="subject" *ngFor="let subject of tree$ | async">
      <mat-card-header>
        <mat-card-title> Kompetenzen {{ subject.name }} </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div
          class="competence"
          *ngFor="let competence of extractCompetenceList(subject)"
        >
          {{ competence.name }}
        </div>
      </mat-card-content>
    </mat-card>

    <button
      class="choose-competence-button"
      mat-raised-button
      (click)="pickCompetenceList()"
    >
      <mat-icon>edit</mat-icon>
      Kompetenzen Auswählen
    </button>
  `,
  styles: [
    `
      .competence {
        margin: 10px;
      }
    `,
    `
      .subject {
        margin-top: 15px;
      }
    `,
    `
      .choose-competence-button {
        margin-top: 15px;
      }
    `,
  ],
})
export class CompetenceContainerComponent implements OnInit, OnDestroy {
  @Input('competence-list') competenceList!: IStringRef[]
  @Input() id!: number
  readonly tree$ = new BehaviorSubject<ISubject[]>([])
  readonly sink = new SubSink()

  constructor(
    private competenceData: CompetencesDataService,
    private pickCompetenceListService: PickCompetenceListService,
    private service: CompetenceContainerService
  ) {}

  ngOnInit(): void {
    const tree = this.competenceData.tree(
      this.competenceList.map((competence) => competence._id)
    )
    this.tree$.next(tree)
  }

  extractCompetenceList(subject: ISubject) {
    const topicList = subject.topics
    let competenceList: IStringRef[] = []
    for (let topic of topicList) {
      if (topic.competences)
        competenceList = competenceList.concat(topic.competences)
      if (topic.subTopics)
        competenceList = competenceList.concat(
          this.extractFromSubTopicList(topic.subTopics)
        )
    }
    return competenceList
  }

  extractFromSubTopicList(subTopicList: ISubTopic[]) {
    let competenceList: IStringRef[] = []
    for (let sub of subTopicList)
      competenceList = competenceList.concat(sub.competences)
    return competenceList
  }

  pickCompetenceList() {
    const sub = this.pickCompetenceListService
      .pickCompetenceList(this.competenceList.map((comp) => comp._id))
      .pipe(
        filterNullish(),
        tap((list) =>
          this.service.putCompetenceList(
            this.id,
            list.map((comp) => comp._id)
          )
        ),
        tap((list) => {
          const tree = this.competenceData.tree(
            list.map((competence) => competence._id)
          )
          this.tree$.next(tree)
        })
      )
      .subscribe()

    this.sink.add(sub)
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
