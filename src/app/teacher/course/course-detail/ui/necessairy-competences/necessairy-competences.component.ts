import { Component, Input } from '@angular/core'
import { ICompetence, IRef } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-necessairy-competences',
  templateUrl: './necessairy-competences.component.html',
  styleUrls: ['./necessairy-competences.component.css'],
})
export class NecessairyCompetencesComponent {
  @Input('name') name?: string
  @Input('competences') competences?: ICompetence[]
}
