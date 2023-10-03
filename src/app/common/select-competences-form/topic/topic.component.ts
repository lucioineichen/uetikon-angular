import { Component, Input } from '@angular/core'

import {
  TreeCompetence,
  TreeSubTopic,
} from '../select-competences-form.component'

@Component({
  selector: 'app-select-topic',
  templateUrl: './topic.component.html',
  styles: [],
})
export class TopicSelectComponent {
  @Input() competences: undefined | TreeCompetence[]
  @Input() subTopics: undefined | TreeSubTopic[]
}
