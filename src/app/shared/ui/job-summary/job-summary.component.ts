import { Component, Input } from '@angular/core'
import { IStudyJob } from '../../utils/interfaces'

@Component({
  selector: 'app-job-summary [job]',
  template: `
    <mat-card class="card">
      <mat-card-header>
        <mat-card-title>{{ job.name }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-chip class="chip" *ngIf="job.subject">
          {{ job.subject }}
        </mat-chip>
        <mat-chip class="chip"> Credits: {{ job.credits }} </mat-chip>
        <mat-chip class="chip"> Aufgaben: {{ job.tasks.length }}</mat-chip>
        <mat-chip class="chip" *ngIf="job.competences.length > 0">
          Kompetenzen: {{ job.competences.length }}
        </mat-chip>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .card {
        max-width: 500px;
      }
      .chip {
        margin-left: 5px;
      }
    `,
  ],
})
export class JobSummaryComponent {
  @Input() job!: IStudyJob
}
