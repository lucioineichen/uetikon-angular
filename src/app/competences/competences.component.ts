import { Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ICompetence } from '../interfaces'
import { CompetenceService } from './competence.service'

@Component({
  selector: 'app-competences',
  template: `
    <div class="add-container">
      <div style="margin-bottom: 10px">
        <button
          mat-mini-fab
          matTooltip="Erstellen"
          aria-label="Erstellen"
          color="primary"
          (click)="addCompetence()"
        >
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>

    <div class="mat-typography">
      <h1>Kompetenzen</h1>
      <div *ngIf="competences$ | async as competences; else noCompetences">
        <div *ngFor="let competence of competences">
          {{ competence.name }}
        </div>
      </div>
      <ng-template #noCompetences>
        Kompetenzen konnten nicht geladen werden
      </ng-template>
    </div>
  `,
  styles: [
    `
      .add-container {
        position: absolute;
        right: 0;
        padding: 16px;
      }
    `,
  ],
})
export class CompetencesXComponent implements OnInit {
  readonly competences$: BehaviorSubject<ICompetence[] | undefined>

  constructor(private service: CompetenceService) {
    this.competences$ = service.competences$
  }

  ngOnInit(): void {
    this.service.updateCompetences()
  }

  addCompetence() {
    this.service.addCompetence()
  }
}
