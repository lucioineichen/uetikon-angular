import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IStudyJob } from 'src/app/interfaces'

@Component({
  selector: 'app-study-job-display [job]',
  template: `
    <mat-list-item
      class="list-item"
      (click)="openJob()"
      (mouseover)="isHover = true"
      (mouseleave)="isHover = false"
    >
      <div matListItemTitle>
        {{ job.name | titlecase }}
      </div>
    </mat-list-item>
  `,
  styles: [
    `
      .list-item {
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }

      .list-item:last-child {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      }
    `,
  ],
})
export class StudyJobDisplayComponent {
  isHover = false
  @Input() job!: IStudyJob
  @Output('open-job') openJobEvent = new EventEmitter<IStudyJob>()

  openJob() {
    this.openJobEvent.emit(this.job)
  }
}
