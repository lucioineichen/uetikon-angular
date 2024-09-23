import { Component } from '@angular/core'
import { ChooseJobService } from './choose-job.service'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { MatDialogRef } from '@angular/material/dialog'
import { filter, tap } from 'rxjs'
import { IAbstractFolder } from 'src/app/shared/ui/choose-folder/choose-folder.service'
import { IStoreFolder } from 'src/app/teacher/study-job/folder/folder.service'

export const noNameFolder: IStoreFolder = {
  _id: 0,
  name: 'loading...',
  studyJobList: [],
  storeFolderList: [],
  path: [],
}

export const noNameJob: IStudyJob = {
  name: 'loading...',
  _id: 0,
  tasks: [],
  competences: [],
  credits: 0,
  subject: { _id: '', name: '' },
  isPublished: false,
  status: 1,
  niveau: 1,
  isSelfAssessment: false,
  materials: [],
}

@Component({
  selector: 'app-choose-study-jobs-dialogg',
  templateUrl: './choose-study-jobs-dialog.component.html',
  styleUrls: ['./choose-job.component.css'],
})
export class ChooseJobComponent {
  folder$ = this.service.folder$
  noNameJob = noNameJob
  noNameFolder = noNameFolder

  constructor(
    protected service: ChooseJobService,
    private dialogRef: MatDialogRef<ChooseJobComponent>
  ) {}

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
