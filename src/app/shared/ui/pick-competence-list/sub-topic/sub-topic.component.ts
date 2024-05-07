import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IPickSubTopic } from '../pick-competence-list.service'

@Component({
  selector: 'app-sub-topic',
  template: `
    <div style="display: flex; align-items: center; padding-bottom: 10px">
      <button
        mat-icon-button
        [attr.aria-label]="'Toggle ' + subTopic.name"
        (click)="isExpanded = !isExpanded"
      >
        <mat-icon class="mat-icon-rtl-mirror">
          {{ isExpanded ? 'expand_more' : 'chevron_right' }}
        </mat-icon>
      </button>
      {{ subTopic.name }}
    </div>
    <div *ngIf="isExpanded" style="padding-left: 30px">
      <div *ngFor="let competence of subTopic.competenceList">
        <app-pick-competence [competence]="competence"></app-pick-competence>
      </div>
    </div>
  `,
  styles: [],
})
export class SubTopicComponent {
  @Input('sub-topic') subTopic!: IPickSubTopic
  isExpanded = false
}
