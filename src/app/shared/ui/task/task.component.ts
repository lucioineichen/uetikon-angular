import { Component, EventEmitter, Input, Output } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ITask } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-task [task]',
  templateUrl: './task.competence.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: ITask
  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()
  isExpanded = false
  deleteJob() {
    setTimeout(() => this.delete.emit(true), 0)
  }
  editJob() {
    setTimeout(() => this.edit.emit(true), 0)
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded
  }
}
