import { Component } from '@angular/core'
import { SelectCompetencesService } from '../select-competences.service'

@Component({
  selector: 'app-selected-subject',
  templateUrl: './selected-subject.component.html',
  styles: [],
})
export class SelectedSubjectComponent {
  readonly subject$ = this.service.selectedSubject$
  readonly searchControl = this.service.searchControl
  readonly competences$ = this.service.competences$

  constructor(protected service: SelectCompetencesService) {}
}
