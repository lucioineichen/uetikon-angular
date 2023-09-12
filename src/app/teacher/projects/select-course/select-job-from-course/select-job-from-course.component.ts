import { Component, Inject } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ICourse, IStudyJob } from 'src/app/interfaces'
import { IStudyPath } from 'src/app/teacher/study-path/study-path.service'
import { SelectCourseService } from '../select-course.service'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-select-job-from-course',
  template: ` <mat-dialog-content
      class="mat-typography"
      style="width: 700px; height: 400px"
    >
      <h1>{{ course.name }}</h1>
      <mat-grid-list
        cols="3"
        rowHeight="40px"
        *ngIf="path$ | async as path; else loading"
      >
        <mat-grid-tile *ngFor="let job of path.jobs">
          <mat-checkbox
            [checked]="isSelected(job)"
            (change)="toggleSelection($event, job)"
            style="width: 100% !important"
          >
            {{ job.name }}
          </mat-checkbox>
        </mat-grid-tile>

        <div *ngIf="path.jobs.length === 0">Es gibt noch keine LernJobs</div>
      </mat-grid-list>

      <ng-template #loading> Lädt LernJobs... </ng-template>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Abrechen</button>
      <button
        [disabled]="selectedJob === undefined"
        mat-button
        [mat-dialog-close]="selectedJob"
        cdkFocusInitial
      >
        Speichern
      </button>
    </mat-dialog-actions>`,
  styles: [],
})
export class SelectJobFromCourseComponent {
  path$: BehaviorSubject<IStudyPath | undefined>
  selectedJob?: IStudyJob

  constructor(
    private service: SelectCourseService,
    @Inject(MAT_DIALOG_DATA) protected course: ICourse
  ) {
    this.path$ = this.service.path$
  }

  ngOnInit(): void {
    this.service.updatePath(this.course._id)
  }

  toggleSelection(event: MatCheckboxChange, job: IStudyJob): void {
    if (event.checked) {
      this.selectedJob = job
    } else {
      this.selectedJob = undefined
    }
  }

  isSelected(job: IStudyJob): boolean {
    return this.selectedJob?._id === job._id
  }
}
