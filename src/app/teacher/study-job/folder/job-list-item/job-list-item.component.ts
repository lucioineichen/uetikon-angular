import { Component, EventEmitter, Input, Output } from '@angular/core'

export interface IJobListItem {
  _id: number
  isSelected: boolean
  isOneSelected: boolean
  name: string
  subject: string
  taskListLength: number
}

@Component({
  selector: 'app-job-list-item',
  template: `
    <div class="job">
      <mat-checkbox
        class="checkbox"
        [ngClass]="{ show: job.isOneSelected }"
        [checked]="job.isSelected"
        (change)="toggleSelection($event.checked)"
      ></mat-checkbox>

      <mat-list-item
        [routerLink]="'/teacher/study-jobs/' + job._id"
        [queryParams]="{ name: job.name }"
        style="cursor: pointer"
      >
        <div matListItemTitle>
          {{ job.name | titlecase }} ({{ job.subject | titlecase }}) °
          {{ job.taskListLength }}
        </div>
      </mat-list-item>
    </div>
  `,
  styleUrls: ['./job-list-item.component.css'],
})
export class JobListItemComponent {
  @Input() job!: IJobListItem
  @Output('selection-change') selectionChangeEvent = new EventEmitter<boolean>()

  toggleSelection(isChecked: boolean) {
    this.selectionChangeEvent.emit(isChecked)
  }
}
