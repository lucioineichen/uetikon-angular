import { Component, Inject, OnInit } from '@angular/core'
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog'
import { Observable, filter, mergeMap, tap } from 'rxjs'
import { IStudyJob } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component'
import { DialogRef } from '@angular/cdk/dialog'
import { UiService } from 'src/app/common/ui.service'

@Component({
  selector: 'app-repository-dialog',
  templateUrl: './study-job-dialog.component.html',
  styleUrls: ['./study-job-dialog.component.css'],
})
export class StudyJobDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public job: IStudyJob,
    private teacherService: TeacherService,
    private dialogRef: MatDialogRef<StudyJobDialogComponent>,
    private dialog: MatDialog,
    private uiService: UiService
  ) {}

  ngOnInit(): void {}

  addTask() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((data) => {
          return this.teacherService.addTask(data, this.job)
        })
      )
      .subscribe({
        next: (task) => this.job.tasks.push(task),
        error: (err) =>
          this.uiService.showToast('Aufgabe konnte nicht erstellt werden'),
      })
  }

  delete() {
    this.uiService
      .confirmDeletion('LernJob', this.job.name)
      .pipe(
        filter((confirmed) => confirmed),
        mergeMap(() => this.teacherService.deleteStudyJob(this.job._id)),
        tap(() => this.dialogRef.close('delete'))
      )
      .subscribe()
  }
}
