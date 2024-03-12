import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, ReplaySubject, catchError, tap } from 'rxjs'
import { IFolder } from 'src/app/shared/utils/interfaces'
import { MatDialogRef } from '@angular/material/dialog'
import { SubSink } from 'subsink'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { StudyJobsService } from '../study-jobs/study-jobs.service'

@Component({
  selector: 'app-choose-study-jobs-dialog',
  templateUrl: './choose-study-jobs-dialog.component.html',
  styles: [],
})
export class ChooseStudyJobsDialogComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  currentFolder$ = new ReplaySubject<IFolder>(1)

  constructor(
    private studyJobsService: StudyJobsService,
    public dialogRef: MatDialogRef<ChooseStudyJobsDialogComponent>,
    private uiService: DialogService
  ) {
    // this.studyJobsService.tree$
    //   .pipe(
    //     tap((tree) => {
    //       this.currentFolder$.next(tree)
    //       if (tree.folders.length + tree.studyJobs.length === 0) {
    //         this.uiService.showToast('Es gibt noch keine LernJobs')
    //         this.dialogRef.close()
    //       }
    //     }),
    //     catchError((err, caugt) => {
    //       this.dialogRef.close()
    //       console.log('close dialog')
    //       return err
    //     })
    //   )
    //   .subscribe()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngOnInit(): void {
    // this.studyJobsService.updaterepositoryTree()
  }
}
