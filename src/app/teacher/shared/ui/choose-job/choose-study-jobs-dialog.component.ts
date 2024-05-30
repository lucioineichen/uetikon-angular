import { Component } from '@angular/core'
import { ChooseJobService } from './choose-job.service'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { MatDialogRef } from '@angular/material/dialog'
import { filter, tap } from 'rxjs'
import { IAbstractFolder } from 'src/app/shared/ui/choose-folder/choose-folder.service'
import { IStoreFolder } from 'src/app/teacher/study-job/folder/folder.service'

@Component({
  selector: 'app-choose-study-jobs-dialogg',
  templateUrl: './choose-study-jobs-dialog.component.html',
  styleUrls: ['./choose-job.component.css'],
})
export class ChooseJobComponent {
  folder$ = this.service.folder$

  constructor(
    protected service: ChooseJobService,
    private dialogRef: MatDialogRef<ChooseJobComponent>
  ) {}

  protected readonly noNameFolder: IStoreFolder = {
    _id: 0,
    name: 'loading...',
    studyJobList: [],
    storeFolderList: [],
    path: [],
  }

  protected readonly noNameJob: IStudyJob = {
    name: 'loading...',
    _id: 0,
    tasks: [],
    competences: [],
    credits: 0,
    subject: '',
  }

  chooseJob(job: IStudyJob) {
    this.service
      .confirmJob(job)
      .pipe(
        filter((isConfirm) => isConfirm),
        tap(() => this.dialogRef.close(job))
      )
      .subscribe()
  }
}
