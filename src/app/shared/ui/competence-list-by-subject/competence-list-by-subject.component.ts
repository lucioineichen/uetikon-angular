import { Component, Input } from '@angular/core'
import { BehaviorSubject, tap } from 'rxjs'
import {
  ISubject,
  ISubTopic,
} from '../../data/competences_data/competences.data'
import { CompetencesDataService } from '../../data/competences_data/competences-data.service'
import { filterNullish } from '../../utils/filternullish'
import { ICompetence } from '../../utils/interfaces'
import { ChooseJobService } from 'src/app/teacher/shared/ui/choose-job/choose-job.service'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-competence-list-by-subject [competence-list]',
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
export class CompetenceListBySubjectComponent {
  @Input('competence-list') competenceList!: ICompetence[]
  readonly tree$ = new BehaviorSubject<ISubject[]>([])

  constructor(private competenceData: CompetencesDataService) {}

  ngOnInit(): void {
    const tree = this.competenceData.tree(
      this.competenceList.map((competence) => competence._id)
    )
    this.tree$.next(tree)
  }

  extractCompetenceList(subject: ISubject) {
    const topicList = subject.topics
    let competenceList: ICompetence[] = []
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
    let competenceList: ICompetence[] = []
    for (let sub of subTopicList)
      competenceList = competenceList.concat(sub.competences)
    return competenceList
  }
}
