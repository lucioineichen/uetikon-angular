import { Component } from '@angular/core'
import { ChooseFolderService } from './choose-folder.service'
import { MatDialogRef } from '@angular/material/dialog'
import { IFolder, IStudyJob } from '../../utils/interfaces'

@Component({
  selector: 'app-choose-folder',
  templateUrl: './choose-folder.component.html',
  styleUrls: ['./choose-folder.component.css'],
})
export class ChooseFolderComponent {
  constructor(protected service: ChooseFolderService) {}

  protected readonly noNameFolder: IFolder = {
    name: 'loading...',
    _id: 0,
    folders: [],
    studyJobs: [],
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
