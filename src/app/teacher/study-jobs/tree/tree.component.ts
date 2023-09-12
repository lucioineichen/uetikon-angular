import { Component, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { IFolder } from 'src/app/interfaces'
import { TeacherCreateStudyJobDialogComponent } from '../../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { catchError, filter, mergeMap, tap } from 'rxjs'
import { StudyJobsService } from '../study-jobs.service'
import { UiService } from 'src/app/common/ui.service'
import { RenameFolderComponent } from 'src/app/ui/rename-folder/rename-folder.component'

@Component({
  selector: 'app-tree [tree] [folder]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent {
  @Input() tree!: IFolder
  @Input() folder!: IFolder
  path: IFolder[] = []

  constructor(
    private dialog: MatDialog,
    private studyJobsService: StudyJobsService,
    private uiService: UiService
  ) {}

  openStudyJobCreator() {
    const dialogRef = this.dialog.open(TeacherCreateStudyJobDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data),
        mergeMap((data) => this.studyJobsService.createStudyJob(data)),
        tap((job) => {
          this.folder.studyJobs.push(job)
        }),
        catchError((err) => {
          this.uiService.showToast('LernJob konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  deleteFolder() {
    this.uiService
      .confirmDeletion('Ordner', this.folder.name)
      .pipe(
        filter((isConfirmed) => isConfirmed),
        mergeMap(() => this.studyJobsService.deleteFolder(this.folder)),
        tap(() => {
          this.path.splice(-1)
          this.folder = this.path[-1] ? this.path[-1] : this.tree
        }),
        catchError((err) => {
          this.uiService.showToast('Ordner konnte nicht gelöscht werden')
          return err
        })
      )
      .subscribe()
  }

  move() {}

  addFolder() {
    const dialogRef = this.dialog.open(RenameFolderComponent)

    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((name) =>
          this.studyJobsService.createFolder(this.folder, name)
        ),
        tap((folder) => this.folder.folders.push(folder)),
        catchError((err) => {
          this.uiService.showToast('Ornder konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  openFolder(folder: IFolder) {
    this.path.push(folder)
    this.folder = folder
  }

  returnToRoot() {
    this.folder = this.tree
    this.path = []
  }
}
