import { Component, EventEmitter, Input, Output } from '@angular/core'
import {
  ICompetence,
  IFile,
  IRef,
  IStudyJob,
  ITask,
} from 'src/app/shared/utils/interfaces'

export class IJobListItem implements IStudyJob {
  get tasks(): ITask[] {
    throw Error('not property of job list item')
  }
  get competences(): ICompetence[] {
    throw Error('not property of job list item')
  }
  get credits(): number {
    throw Error('not property of job list item')
  }
  get niveau(): number {
    throw Error('not property of job list item')
  }
  get isSelfAssessment(): boolean {
    throw Error('not property of job list item')
  }
  get materials(): IFile[] {
    throw Error('not property of job list item')
  }

  constructor(
    public _id: number,
    public name: string,
    public taskListLength: number,
    public isPublished: boolean,
    public status: number,
    public subject?: { _id: string; name: string },
    public isSelected = false,
    public isOneSelected = false
  ) {}

  static Build(job: IStudyJob) {
    return new IJobListItem(
      job._id,
      job.name,
      job.tasks.length,
      job.isPublished,
      job.status,
      job.subject
    )
  }
}

@Component({
  selector: 'app-job-list-item [job]',
  template: `
    <div class="job" [ngClass]="{ 'job-selected': job.isSelected }">
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
          <span>{{ job.name | titlecase }} </span>
          <span *ngIf="job.subject">({{ job.subject.name | titlecase }})</span>
          <span> ° {{ job.taskListLength }}</span>
          <span class="status">
            <span *ngIf="!job.isPublished">
              ({{ job.status | jobStatus }})</span
            >
            <span *ngIf="job.isPublished"> (Publiziert)</span>
          </span>
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
