import { Component, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { IFolder } from 'src/app/interfaces'
import { TeacherCreateStudyJobDialogComponent } from '../../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { filter, mergeMap } from 'rxjs'
import { StudyJobsService } from '../study-jobs.service'
import { UiService } from 'src/app/common/ui.service'

@Component({
  selector: 'app-tree [tree] [folder]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent {
  @Input() tree!: IFolder
  @Input() folder!: IFolder
  renamingFolder?: IFolder
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
        mergeMap((data) => this.studyJobsService.createStudyJob(data))
      )
      .subscribe({
        next: () => this.studyJobsService.updaterepositoryTree(),
        error: () => {
          this.uiService.showToast('LernJob Konnte nicht erstellt werden')
        },
      })
  }

  addFolder(event: Event) {
    ;(event as any).renaming = true
    this.studyJobsService.addFolder$.next()
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
