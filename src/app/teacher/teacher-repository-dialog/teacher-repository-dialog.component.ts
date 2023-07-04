import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { IRepository, IStudyJob } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { TeacherAddTaskDialogComponent } from '../teacher-add-task-dialog/teacher-add-task-dialog.component'
import { DialogRef } from '@angular/cdk/dialog'

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
    private dialog: MatDialog
  ) {
    this.studyJobs$ = this.teacherService.getStudyJobs(repo._id)
    this.studyJobs$.subscribe((data) => console.log(data))
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  addTask(job: IStudyJob) {
    const dialogRef = this.dialog.open(TeacherAddTaskDialogComponent)

    dialogRef
      .afterClosed()
      .subscribe((data) => this.teacherService.addTask(data, job))
  }
}
