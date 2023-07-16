import { Component, OnInit } from '@angular/core'
import { TeacherService } from '../teacher.service'
import { Subject, catchError, filter, mergeMap, tap } from 'rxjs'
import { IFolder, IStudyJob } from 'src/app/interfaces'
import { UiService } from 'src/app/common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCreateStudyJobDialogComponent } from '../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { StudyJobDialogComponent } from '../study-job-dialog/study-job-dialog.component'
import { isNewFolder } from 'src/app/folder'

@Component({
  selector: 'app-study-jobs',
  templateUrl: './study-jobs.component.html',
  styleUrls: ['./study-jobs.component.css'],
})
export class TeacherStudyJobsComponent implements OnInit {
  tree$: Subject<IFolder>
  isError = false

  constructor(
    private teacherService: TeacherService,
    private uiService: UiService,
    private dialog: MatDialog
  ) {
    this.tree$ = this.teacherService.tree$
    this.tree$
      .pipe(
        tap((tree) => {
          if (tree.folders.length + tree.studyJobs.length === 0) {
            this.uiService.showToast('Es gibt noch keine LernJobs')
          }
        }),
        catchError((err, caugt) => {
          this.isError = true
          return err
        })
      )
      .subscribe()
  }

  openFolder() {}

  addFolder() {
    console.log(isNewFolder('Neuer Ordner (12) b'))

    // const pattern = /^Neuer Ordner\((\d+)\)$/

    // console.log(isNewFolder('Neuer Ordner (1)'))

    // this.tree$
    //   .subscribe((folder) => {
    //     const match =
    //       folder.folders.length > 0
    //         ? folder.folders
    //             .reduce((previousFolder, currentFolder) => {
    //               const currentMatch = currentFolder.name.match(pattern)
    //               const previousMatch = previousFolder.name.match(pattern)

    //               if (currentMatch && currentMatch[1]) {
    //                 if (
    //                   previousMatch &&
    //                   previousMatch[1] &&
    //                   parseInt(previousMatch[1], 10) >
    //                     parseInt(currentMatch[1], 10)
    //                 )
    //                   return previousFolder
    //                 else return currentFolder
    //               }
    //               return previousFolder
    //             })
    //             .name.match(pattern)
    //         : null
    //     console.log('match: ', match)
    //     const number = match ? parseInt(match[1], 10) + 1 : 1

    //     folder.folders.push({
    //       _id: 0,
    //       name: `Neuer Ordner (${number})`,
    //       folders: [],
    //       studyJobs: [],
    //     })
    //   })
    //   .unsubscribe()
  }

  openJob(job: IStudyJob) {
    this.dialog.open(StudyJobDialogComponent, {
      panelClass: 'fullscreen-dialog',
      data: job,
    })
  }

  ngOnInit(): void {
    this.teacherService.updaterepositoryTree()
  }

  openStudyJobCreator() {
    const dialogRef = this.dialog.open(TeacherCreateStudyJobDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data),
        mergeMap((data) => this.teacherService.createStudyJob(data))
      )
      .subscribe({
        next: () => this.teacherService.updaterepositoryTree(),
        error: (err) => {
          this.uiService.showToast('LernJob Konnte nicht erstellt werden')
        },
      })
  }
}
