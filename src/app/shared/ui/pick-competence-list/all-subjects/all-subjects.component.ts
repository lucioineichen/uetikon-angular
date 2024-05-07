import { Component, EventEmitter, Output } from '@angular/core'
import { PickCompetenceListService } from '../pick-competence-list.service'

@Component({
  selector: 'app-all-subjects',
  template: `
    <mat-accordion *ngIf="subjectList$ | async as subjects">
      <mat-expansion-panel *ngFor="let subject of subjects" hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{ subject.name }}
            <button
              style="position: absolute; right: 15px"
              mat-stroked-button
              (click)="openSubject(subject._id)"
            >
              Öffnen
            </button>
          </mat-panel-title>
        </mat-expansion-panel-header>

        <div
          style="display: flex; align-items: center; padding-bottom: 10px"
          *ngFor="let topic of subject.topicList"
        >
          <app-topic [topic]="topic"></app-topic>
        </div>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [],
})
export class AllSubjectsComponent {
  @Output('open-subject') openSubjectEvent = new EventEmitter<string>()
  readonly subjectList$ = this.service.subjectList$
  constructor(protected service: PickCompetenceListService) {}

  openSubject(subjectId: string) {
    this.openSubjectEvent.emit(subjectId)
  }
}
