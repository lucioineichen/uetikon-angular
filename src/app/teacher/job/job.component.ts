import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TeacherService } from '../teacher.service'
import { BehaviorSubject, catchError, filter, mergeMap, tap } from 'rxjs'
import { IStudyJob } from 'src/app/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component'
import { UiService } from 'src/app/common/ui.service'
import { StudyJobsService } from '../study-jobs/study-jobs.service'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  id: number
  name: string
  folderId: number
  job$ = new BehaviorSubject<IStudyJob | undefined>(undefined)

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private studyJobsService: StudyJobsService,
    private teacherService: TeacherService,
    private dialog: MatDialog,
    private uiService: UiService
  ) {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.queryParams['name']
    this.folderId = this.route.snapshot.queryParams['folderId']
  }

  navigateBack() {
    if (+this.folderId > 0)
      this.router.navigate(['teacher', 'study-jobs', 'folder', this.folderId])
    this.router.navigate(['teacher', 'study-jobs'])
  }

  ngOnInit(): void {
    this.studyJobsService
      .getStudyJob(this.id)
      .pipe(tap((job) => this.job$.next(job)))
      .subscribe()
  }

  addTask() {
    const job = this.job$.value
    if (!job) return

    const dialogRef = this.dialog.open(AddTaskDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((data) => {
          return this.teacherService.addTask(data, job)
        }),
        tap((task) => {
          job.tasks.push(task)
        }),
        catchError((err) => {
          this.uiService.showToast('Aufgabe konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  delete() {
    const job = this.job$.value
    if (!job) return

    this.uiService
      .confirmDeletion('LernJob', job.name)
      .pipe(
        filter((confirmed) => confirmed),
        mergeMap(() => this.teacherService.deleteStudyJob(job._id))
        // tap(() => this.dialogRef.close('delete'))
      )
      .subscribe()
  }
}
