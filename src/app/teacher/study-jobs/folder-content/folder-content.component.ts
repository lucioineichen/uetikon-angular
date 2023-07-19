import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IFolder, IStudyJob } from 'src/app/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { StudyJobDialogComponent } from '../../study-job-dialog/study-job-dialog.component'

@Component({
  selector: 'app-folder-content [folder]',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.css'],
})
export class FolderContentComponent {
  @Output('open-folder') openFolderEvent = new EventEmitter<IFolder>()
  @Input() folder!: IFolder

  constructor(private dialog: MatDialog) {}

  openFolder(folder: IFolder) {
    this.openFolderEvent.emit(folder)
  }

  openJob(job: IStudyJob) {
    this.dialog.open(StudyJobDialogComponent, {
      panelClass: 'fullscreen-dialog',
      data: job,
    })
  }
}
