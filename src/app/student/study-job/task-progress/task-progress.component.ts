import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ITaskProgress } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-task-progress [progress]',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.css'],
})
export class TaskProgressComponent {
  @Input() progress!: ITaskProgress
  @Output('enter-progress') enterProgressEvent = new EventEmitter<true>()
  @Output('add-submission') addSubmissionEvent = new EventEmitter<true>()
  isExpanded = false

  addSubmission() {
    this.addSubmissionEvent.emit(true)
  }

  enterProgress() {
    this.enterProgressEvent.emit(true)
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded
  }

  get task() {
    return this.progress.task
  }
}
