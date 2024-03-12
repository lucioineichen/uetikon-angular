import { Component, Input } from '@angular/core'
import {
  SelectCompetence,
  SelectSubTopic,
} from '../select-competences.interface'
import { SelectCompetencesService } from '../select-competences.service'
import { ICompetence } from 'src/app/shared/data/competences_data/competences.data'

@Component({
  selector: 'app-select-topic',
  templateUrl: './topic.component.html',
  styles: [],
})
export class TopicSelectComponent {
  @Input() competences: undefined | SelectCompetence[]
  @Input() subTopics: undefined | SelectSubTopic[]

  constructor(protected service: SelectCompetencesService) {}
}
