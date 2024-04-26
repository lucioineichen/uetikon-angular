import { Component, Input } from '@angular/core'
import { IPickTopic } from '../pick-competence-list.service'

@Component({
  selector: 'app-topic',
  template: `
    <div style="display: flex; align-items: center; padding-bottom: 10px">
      <button
        mat-icon-button
        [attr.aria-label]="'Toggle ' + topic.name"
        (click)="isExpanded = !isExpanded"
      >
        <mat-icon class="mat-icon-rtl-mirror">
          {{ isExpanded ? 'expand_more' : 'chevron_right' }}
        </mat-icon>
      </button>
      {{ topic.name }}
    </div>
    <div *ngIf="isExpanded" style="padding-left: 30px">
      <div *ngFor="let competence of topic.competenceList">
        <app-pick-competence [competence]="competence" ]></app-pick-competence>
      </div>
    </div>
  `,
  styles: [],
})
export class TopicComponent {
  @Input() topic!: IPickTopic
  isExpanded = false
}
