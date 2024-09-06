import { Component, Input } from '@angular/core'
import { IStudyJob } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-job-list-item [job]',
  template: `
    <mat-list-item class="job" [ngClass]="{ hover: hover }">
      <div matListItemTitle>
        {{ job.name | titlecase }}
        <span *ngIf="job.subject">({{ job.subject.name | titlecase }})</span> °
        {{ job.tasks.length }}
      </div>
    </mat-list-item>
  `,
  styles: [
    `
      .job {
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }
    `,
    `
      .hover:hover {
        background-color: rgba(0, 0, 0, 0.06);
        cursor: pointer;
      }
    `,
  ],
})
export class JobListItemComponent {
  @Input() job!: IStudyJob
  @Input('hover-effect') hover = true
}
