import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, ReplaySubject, catchError, tap } from 'rxjs'
import { IRepositoryFolder } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { MatDialogRef } from '@angular/material/dialog'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-choose-study-jobs-dialog',
  templateUrl: './choose-study-jobs-dialog.component.html',
  styles: [],
})
export class ChooseStudyJobsDialogComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  currentFolder$ = new ReplaySubject<IRepositoryFolder>(1)

  constructor(
    private teacherService: TeacherService,
    public dialogRef: MatDialogRef<ChooseStudyJobsDialogComponent>
  ) {
    this.teacherService.repositoryTree$
      .pipe(
        tap((tree) => this.currentFolder$.next(tree)),
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
