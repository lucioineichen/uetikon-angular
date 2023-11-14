import { Component, Input } from '@angular/core'
import {
  SelectCompetence,
  SelectSubTopic,
} from '../select-competences.interface'

@Component({
  selector: 'app-select-topic',
  templateUrl: './topic.component.html',
  styles: [],
})
export class TopicSelectComponent {
  @Input() competences: undefined | SelectCompetence[]
  @Input() subTopics: undefined | SelectSubTopic[]
}
