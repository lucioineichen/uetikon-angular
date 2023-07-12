import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { Observable, mergeMap } from 'rxjs'
import { IRepository, IStudyJob } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { TeacherAddTaskDialogComponent } from '../teacher-add-task-dialog/teacher-add-task-dialog.component'
import { DialogRef } from '@angular/cdk/dialog'
import { UiService } from 'src/app/common/ui.service'

@Component({
  selector: 'app-teacher-repository-dialog',
  templateUrl: './teacher-repository-dialog.component.html',
  styleUrls: ['./teacher-repository-dialog.component.css'],
})
export class TeacherRepositoryDialogComponent implements OnInit {
  studyJobs$: Observable<IStudyJob[]>

  constructor(
    @Inject(MAT_DIALOG_DATA) public repo: IRepository,
    private teacherService: TeacherService,
    private dialog: MatDialog,
    private uiService: UiService
  ) {
    this.studyJobs$ = this.teacherService.getStudyJobs(repo._id)
  }

  ngOnInit(): void {}

  addTask(job: IStudyJob) {
    const dialogRef = this.dialog.open(TeacherAddTaskDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((data) => {
          console.log(data)
          return this.teacherService.addTask(data, job)
        })
      )
      .subscribe({
        next: (task) => job.tasks.push(task),
        error: (err) =>
          this.uiService.showToast('Aufgabe konnte nicht erstellt werden'),
      })
  }
}
