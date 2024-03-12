import { Component } from '@angular/core'
import { SelectCompetencesService } from './select-competences.service'

@Component({
  selector: 'app-select-competences',
  templateUrl: './select-competences.component.html',
  styleUrls: ['./select-competences.component.css'],
})
export class SelectCompetencesComponent {
  readonly subjects$ = this.service.subjects$
  readonly subjectControl = this.service.subjectControl
  readonly searchControl = this.service.searchControl
  readonly selectedSubject$ = this.service.selectedSubject$
  constructor(protected service: SelectCompetencesService) {}
  openSubject(id: string) {
    this.subjectControl.setValue(id)
  }
}
