import { Component } from '@angular/core'
import { PickCompetenceListService } from '../pick-competence-list.service'

@Component({
  selector: 'app-filtered-competence-list',
  template: ` <mat-accordion
    *ngIf="competenceList$ | async as competenceList"
    multi
  >
    <mat-expansion-panel
      [expanded]="true"
      style="
      line-height: 20px;
      font-family: Roboto, sans-serif;
      letter-spacing: 0.0178571429em;
    "
    >
      <div *ngFor="let competence of competenceList">
        <app-pick-competence [competence]="competence"></app-pick-competence>
      </div>
    </mat-expansion-panel>
  </mat-accordion>`,
  styles: [],
})
export class FilteredCompetenceListComponent {
  readonly competenceList$ = this.service.filteredCompetenceList$
  constructor(protected service: PickCompetenceListService) {}
}
