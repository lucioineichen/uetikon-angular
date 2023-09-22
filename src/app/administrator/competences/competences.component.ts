import { Component } from '@angular/core'
import { CompetencesService } from './competences.service'

@Component({
  selector: 'app-competences',
  template: `
    <button mat-raised-button color="primary" (click)="init()">Init</button>
  `,
  styles: [],
})
export class CompetencesComponent {
  constructor(private serivce: CompetencesService) {}

  init() {
    this.serivce.initCompetences()
  }
}
