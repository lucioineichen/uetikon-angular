import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core'
import { IFolder, IStudyJob } from 'src/app/interfaces'
import { getNewFolderNumber } from 'src/app/folder'
import { MatDialog } from '@angular/material/dialog'
import { StudyJobDialogComponent } from '../../study-job-dialog/study-job-dialog.component'
import { StudyJobsService } from '../study-jobs.service'
import { map, mergeMap, tap } from 'rxjs'

@Component({
  selector: 'app-folder-content [folder]',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.css'],
})
export class FolderContentComponent {
  @Output('open-folder') openFolderEvent = new EventEmitter<IFolder>()
  @Input() folder!: IFolder
  renamingFolder?: IFolder

  constructor(
    private studyJobsService: StudyJobsService,
    private dialog: MatDialog
  ) {
    this.studyJobsService.addFolder$
      .pipe(
        mergeMap(() => this.studyJobsService.createFolder(this.folder)),
        tap((newFolder) => {
          this.folder.folders.push(newFolder)
          this.renamingFolder = newFolder
        })
      )
      .subscribe({})
  }

  openFolder(folder: IFolder) {
    this.openFolderEvent.emit(folder)
  }

  setName() {
    if (this.renamingFolder)
      this.studyJobsService.renameFolder(this.renamingFolder).subscribe({
        next: (folder) => {},
        error: (err) => {
          this.studyJobsService.updaterepositoryTree()
        },
      })
    this.renamingFolder = undefined
  }

  openJob(job: IStudyJob) {
    this.dialog.open(StudyJobDialogComponent, {
      panelClass: 'fullscreen-dialog',
      data: job,
    })
  }

  @HostListener('document:click', ['$event'])
  onClickedOutside(event: Event) {
    if ((event as any).renaming && this.renamingFolder) {
      this.studyJobsService.renameFolder(this.renamingFolder).subscribe({
        next: (folder) => {},
        error: (err) => {
          this.studyJobsService.updaterepositoryTree()
        },
      })
      this.renamingFolder = undefined
    }
  }
}
