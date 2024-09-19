import { Component, OnInit } from '@angular/core'
import { ChooseFolderService, IAbstractFolder } from './choose-folder.service'
import { MatDialogRef } from '@angular/material/dialog'
import { IStudyJob } from '../../utils/interfaces'
import { IStoreFolder } from 'src/app/teacher/study-job/folder/folder.service'
import { tap } from 'rxjs'
import {
  noNameFolder,
  noNameJob,
} from 'src/app/teacher/shared/ui/choose-job/choose-study-jobs-dialog.component'

@Component({
  selector: 'app-choose-folder',
  templateUrl: './choose-folder.component.html',
  styleUrls: ['./choose-folder.component.css'],
})
export class ChooseFolderComponent implements OnInit {
  noNameJob = noNameJob
  noNameFolder = noNameFolder

  constructor(protected service: ChooseFolderService) {}

  ngOnInit(): void {
    this.service.folder$.pipe(tap(console.info)).subscribe()
  }
}
