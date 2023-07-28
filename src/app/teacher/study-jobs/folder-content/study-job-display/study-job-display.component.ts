import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IStudyJob } from 'src/app/interfaces'
import { StudyJobDisplay } from './study-job-display'
import { Router } from '@angular/router'

@Component({
  selector: 'app-study-job-display [jobs] [folderId]',
  template: `
    <div
      *ngFor="let job of jobs"
      fxLayout
      style="transform: translateX(-40px);"
      class="list-item-container"
    >
      <div>
        <mat-checkbox
          *ngIf="!oneSelected; else different"
          class="checkbox"
          [(ngModel)]="job.isSelected"
        ></mat-checkbox>
        <ng-template #different>
          <mat-checkbox [(ngModel)]="job.isSelected"></mat-checkbox>
        </ng-template>
      </div>
      <div style="width: 100%;">
        <mat-list-item class="list-item" (click)="openJob(job)">
          <div matListItemTitle>
            {{ job.name | titlecase }}
          </div>
        </mat-list-item>
      </div>
    </div>
  `,
  styles: [
    `
      .list-item {
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }
    `,
    `
      mat-list-item:hover {
        background-color: rgba(0, 0, 0, 0.06);
        cursor: pointer;
      }
    `,
    `
      .checkbox {
        opacity: 0;
      }
    `,
    `
      .list-item-container:hover .checkbox {
        opacity: 1;
      }
    `,
  ],
})
export class StudyJobDisplayComponent implements OnInit {
  @Input() isForm = false
  isHover = false
  @Input() jobs!: StudyJobDisplay[]
  @Input() folderId!: number
  @Output('open-job') openJobEvent = new EventEmitter<IStudyJob>()

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.jobs)
  }

  get oneSelected() {
    return this.jobs.findIndex((job) => job.isSelected) !== -1
  }

  openJob(job: StudyJobDisplay) {
    this.router.navigate(['teacher', 'study-jobs', job.jobId], {
      queryParams: {
        name: job.name,
        folderId: this.folderId,
      },
    })
  }
}
