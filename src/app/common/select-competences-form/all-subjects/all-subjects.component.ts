import { Component } from '@angular/core'
import { SelectCompetencesService } from '../select-competences.service'

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styles: [],
})
export class AllSubjectsComponent {
  readonly subjects$ = this.service.subjects$

  constructor(protected service: SelectCompetencesService) {}
}
