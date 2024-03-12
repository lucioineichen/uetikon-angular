import { Component } from '@angular/core'
import { SelectCompetencesService } from './select-competences.service'

@Component({
  selector: 'app-select-competences-form',
  templateUrl: './select-competences-form.component.html',
  styleUrls: ['./select-competences-form.component.css'],
})
export class SelectCompetencesFormComponent {
  readonly subjects$ = this.service.subjects$
  readonly subjectControl = this.service.subjectControl
  readonly searchControl = this.service.searchControl
  readonly selectedSubject$ = this.service.selectedSubject$

  constructor(protected service: SelectCompetencesService) {}

  openSubject(id: string) {
    this.subjectControl.setValue(id)
  }
}
