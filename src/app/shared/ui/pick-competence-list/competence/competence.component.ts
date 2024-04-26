import { Component, EventEmitter, Input, Output } from '@angular/core'
import {
  IPickCompetence,
  PickCompetenceListService,
} from '../pick-competence-list.service'

@Component({
  selector: 'app-pick-competence [competence]',
  template: `
    <mat-checkbox
      class="competence"
      [checked]="competence.isSelected"
      (change)="toggleSelection(competence._id, $event.checked)"
      >{{ competence.name }}</mat-checkbox
    >
  `,
  styles: [
    `
      .competence {
        padding: 5px 5px 10px 5px;
      }
    `,
  ],
})
export class CompetenceComponent {
  @Input() competence!: IPickCompetence

  constructor(private service: PickCompetenceListService) {}

  toggleSelection(_id: string, isSelected: boolean): void {
    this.service.toggleSelection(_id, isSelected)
  }
}
