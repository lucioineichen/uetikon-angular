import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { BehaviorSubject, map, tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { ChooseJobService } from 'src/app/teacher/shared/ui/choose-job/choose-job.service'
import { SubSink } from 'subsink'
import { ChoiceContainerService } from './choice-container.service'
import { ConfirmDeleteModule } from 'src/app/shared/ui/confirm-delete/confirm-delete.module'
import { ConfirmDeleteService } from 'src/app/shared/ui/confirm-delete/confirm-delete.service'

@Component({
  selector: 'app-choice-container',
  template: `
    <mat-grid-list
      class="jobs"
      gutterSize="20px"
      rowHeight="240px"
      [cols]="breakpoint"
      (window:resize)="onResize($event)"
    >
      <mat-grid-tile *ngFor="let choice of jobChoiceList$ | async">
        <mat-card
          class="course-card"
          [ngClass]="{ 'delete-card': isDelete$ | async }"
          (click)="actionOnJob(choice)"
        >
          <button
            class="delete-job-button"
            mat-icon-button
            *ngIf="isDelete$ | async"
          >
            <mat-icon>delete</mat-icon>
          </button>
          <div mat-ripple class="job-choice">
            <app-mandetory-job [job]="choice"></app-mandetory-job>
          </div>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>

    <div>
      <button class="add-job-button" mat-raised-button (click)="addJob()">
        <mat-icon>add</mat-icon>Job Hinzufügen
      </button>

      <button
        *ngIf="!(isDelete$ | async)"
        mat-raised-button
        (click)="setIsDelete(true)"
      >
        <mat-icon>delete</mat-icon>Job Löschen
      </button>

      <button
        *ngIf="isDelete$ | async"
        mat-raised-button
        (click)="setIsDelete(false)"
      >
        <mat-icon>delete</mat-icon>Job Löschen Beenden
      </button>
    </div>
  `,
  styles: [
    `
      .course-card {
        overflow: visible;
        height: 200px;
      }
    `,
    `
      .job-choice {
        height: 100%;
        width: 400px;
        padding: 10px;
      }
    `,
    `
      .job-choice:hover {
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transition: all 200ms ease;
      }
    `,
    `
      .delete-card {
        background-color: #e86561;
      }
    `,
    `
      .delete-job-button {
        position: absolute;
        right: 0;
      }
    `,
    `
      .add-job-button {
        margin-right: 15px;
      }
    `,
  ],
})
export class ChoiceContainerComponent implements OnInit, OnDestroy {
  @Input('job-choice-list') _jobChoiceList!: IStudyJob[]
  @Input() id!: number
  breakpoint!: number
  readonly sink = new SubSink()
  readonly jobChoiceList$ = new BehaviorSubject<IStudyJob[]>([])
  readonly isDelete$ = new BehaviorSubject<boolean>(false)

  constructor(
    private chooseJob: ChooseJobService,
    private service: ChoiceContainerService,
    private confirmDelete: ConfirmDeleteService
  ) {}

  actionOnJob(job: IStudyJob) {
    if (this.isDelete$.value) {
      this.confirmDelete
        .confirmDelete(job.name)
        .pipe(
          map((isConfirm) => (isConfirm ? true : undefined)),
          filterNullish(),
          map(() =>
            this.jobChoiceList$.value.filter((_job) => _job._id != job._id)
          ),
          tap((list) =>
            this.service.putJobList(
              this.id,
              list.map((job) => job._id)
            )
          ),
          tap((list) => this.jobChoiceList$.next(list))
        )
        .subscribe()
    }
  }

  onResize(event: any) {
    this.breakpoint = this.calcBreakpoint(event.target.innerWidth)
  }

  ngOnInit(): void {
    this.jobChoiceList$.next(this._jobChoiceList)
    this.breakpoint = this.calcBreakpoint(window.innerWidth)
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }

  setIsDelete(isDelete: boolean) {
    this.isDelete$.next(isDelete)
  }

  addJob() {
    const sub = this.chooseJob
      .chooseJob()
      .pipe(
        filterNullish(),
        map((job) => {
          const jobList = this.jobChoiceList$.value
          if (!jobList) return undefined
          if (jobList.findIndex((_job) => _job._id == job._id) > -1)
            return jobList
          return jobList.concat(job)
        }),
        filterNullish(),
        tap((jobList) =>
          this.service.putJobList(
            this.id,
            jobList.map((job) => job._id)
          )
        ),
        tap((jobList) => this.jobChoiceList$.next(jobList))
      )
      .subscribe()

    this.sink.add(sub)
  }

  private calcBreakpoint(width: number) {
    if (width > 1700) return 3
    if (width > 1290) return 2
    return 1
  }
}
