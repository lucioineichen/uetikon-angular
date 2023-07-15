import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, ReplaySubject, catchError, tap } from 'rxjs'
import { IFolder } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { MatDialogRef } from '@angular/material/dialog'
import { SubSink } from 'subsink'
import { UiService } from 'src/app/common/ui.service'

@Component({
  selector: 'app-choose-study-jobs-dialog',
  templateUrl: './choose-study-jobs-dialog.component.html',
  styles: [],
})
export class ChooseStudyJobsDialogComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  currentFolder$ = new ReplaySubject<IFolder>(1)

  constructor(
    private teacherService: TeacherService,
    public dialogRef: MatDialogRef<ChooseStudyJobsDialogComponent>,
    private uiService: UiService
  ) {
    this.teacherService.tree$
      .pipe(
        tap((tree) => {
          this.currentFolder$.next(tree)
          if (tree.folders.length + tree.studyJobs.length === 0) {
            this.uiService.showToast('Es gibt noch keine LernJobs')
            this.dialogRef.close()
          }
        }),
        catchError((err, caugt) => {
          this.dialogRef.close()
          console.log('close dialog')
          return err
        })
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngOnInit(): void {
    this.teacherService.updaterepositoryTree()
  }
}
