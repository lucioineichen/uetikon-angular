import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TeacherService } from '../teacher.service'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { IStudyJob } from 'src/app/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component'
import { UiService } from 'src/app/common/ui.service'
import { StudyJobsService } from '../study-jobs/study-jobs.service'
import { Location } from '@angular/common'
import { JobService } from './job.service'
import { AddTaskService } from '../add-task-dialog/add-task.service'
import { filterNullish } from 'src/app/common/common'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  isEditing = false
  name!: Observable<string>
  job$ = this.service.job$
  competencesControl!: FormControl

  constructor(
    protected route: ActivatedRoute,
    private service: JobService,
    private addTaskService: AddTaskService,
    private location: Location
  ) {}

  navigateBack() {
    this.location.back()
  }

  ngOnInit(): void {
    this.competencesControl = new FormControl()

    this.job$
      .pipe(tap((job) => this.competencesControl.setValue(job?.competences)))
      .subscribe()

    this.route.params
      .pipe(
        tap(console.log),
        tap((params) => {
          this.service.update(params['id'])
        })
      )
      .subscribe()

    this.name = this.route.queryParams.pipe(map((qParams) => qParams['name']))
  }

  addTask() {
    const job = this.job$.value
    if (!job) return

    this.addTaskService
      .addTask(job._id)
      .pipe(
        filterNullish(),
        tap(() => this.service.update(job._id))
      )
      .subscribe()
  }

  delete() {
    // const job = this.job$.value
    // if (!job) return
    // this.uiService
    //   .confirmDeletion('LernJob', job.name)
    //   .pipe(
    //     filter((confirmed) => confirmed),
    //     mergeMap(() => this.teacherService.deleteStudyJob(job._id))
    //     // tap(() => this.dialogRef.close('delete'))
    //   )
    //   .subscribe()
  }

  selectCompetences() {}

  toggleEdit(value: boolean) {
    this.isEditing = value
  }
}
