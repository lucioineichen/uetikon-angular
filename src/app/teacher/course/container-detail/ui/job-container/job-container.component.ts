import { Component, Input } from '@angular/core'
import { IStudyJob } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-job-container',
  template: `
    <mat-card class="job" mat-ripple>
      <app-mandetory-job [job]="job"></app-mandetory-job>
    </mat-card>
  `,
  styles: [
    `
      .job {
        width: 500px;
        padding: 10px;
      }
    `,
    `
      .job:hover {
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transition: all 200ms ease;
      }
    `,
  ],
})
export class JobContainerComponent {
  @Input() job!: IStudyJob
}
