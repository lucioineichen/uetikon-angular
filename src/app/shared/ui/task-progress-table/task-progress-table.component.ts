import { Component, Input } from '@angular/core'
import { IProgress, ITaskProgress } from '../../utils/interfaces'
import { Header } from '../job-progress-table/job-progress-table.component'

@Component({
  selector: 'app-task-progress-table [task-progress-list]',
  templateUrl: './task-progress-table.component.html',
  styleUrls: ['./task-progress-table.component.css'],
})
export class TaskProgressTableComponent {
  @Input('task-progress-list') progressList!: ITaskProgress[]

  readonly headers = [
    { name: 'Aufgabe', width: 34 },
    { name: 'Note', width: 33 },
    { name: 'Erfüllt', width: 33 },
  ].map(Header.Build)
}
