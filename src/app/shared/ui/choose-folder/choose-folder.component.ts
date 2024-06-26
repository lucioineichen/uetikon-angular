import { Component } from '@angular/core'
import { ChooseFolderService, IAbstractFolder } from './choose-folder.service'
import { MatDialogRef } from '@angular/material/dialog'
import { IStudyJob } from '../../utils/interfaces'
import { IStoreFolder } from 'src/app/teacher/study-job/folder/folder.service'

@Component({
  selector: 'app-choose-folder',
  templateUrl: './choose-folder.component.html',
  styleUrls: ['./choose-folder.component.css'],
})
export class ChooseFolderComponent {
  constructor(protected service: ChooseFolderService) {}

  protected readonly noNameFolder: IStoreFolder = {
    name: 'loading...',
    _id: 0,
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
}
