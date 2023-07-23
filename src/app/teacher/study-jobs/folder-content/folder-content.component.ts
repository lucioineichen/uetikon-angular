import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IFolder, IFolderRef, IStudyJob } from 'src/app/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { StudyJobDialogComponent } from '../../study-job-dialog/study-job-dialog.component'
import { tap } from 'rxjs'

@Component({
  selector: 'app-folder-content [folder]',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.css'],
})
export class FolderContentComponent {
  @Output('open-folder') openFolderEvent = new EventEmitter<IFolder>()
  @Input() folder!: IFolder

  constructor(private dialog: MatDialog) {}

  openJob(job: IStudyJob) {
    const dialogRef = this.dialog.open(StudyJobDialogComponent, {
      panelClass: 'fullscreen-dialog',
      data: job,
    })

    dialogRef
      .afterClosed()
      .pipe(
        tap((action) => {
          if (action === 'delete')
            this.folder.studyJobs = this.folder.studyJobs.filter(
              (job_) => job_._id !== job._id
            )
        })
      )
      .subscribe()
  }
}
