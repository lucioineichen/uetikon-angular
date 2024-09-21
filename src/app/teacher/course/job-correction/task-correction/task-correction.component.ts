import { Component, Input, Output } from '@angular/core'
import { catchError, map, mergeMap, tap } from 'rxjs'
import { EnterTaskProgressService } from 'src/app/shared/ui/enter-task-progress/enter-task-progress.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ISubmission, ITaskProgress } from 'src/app/shared/utils/interfaces'
import { TaskCorrectionService } from './task-correction.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { AddCorrectionService } from '../add-correction/add-correction.service'

@Component({
  selector: 'app-task-correction',
  templateUrl: './task-correction.component.html',
  styleUrls: ['./task-correction.component.css'],
})
export class TaskCorrectionComponent {
  @Input() progress!: ITaskProgress
  isExpanded = false

  constructor(
    private enterProgressService: EnterTaskProgressService,
    private service: TaskCorrectionService,
    private ui: DialogService,
    private addCorrectionService: AddCorrectionService
  ) {}

  addCorrection(submission: ISubmission) {
    this.addCorrectionService
      .addCorrection(this.progress.task.title)
      .pipe(
        mergeMap((data) => this.service.postCorrection(submission._id, data)),
        tap((correction) =>
          this.progress.submissions
            .find((sub) => sub._id == submission._id)
            ?.corrections.push(correction)
        ),
        catchError((err) => {
          this.ui.showToast('Korrektur konnte nicht hinzugefügt werden')
          return err
        })
      )
      .subscribe()
  }

  enterProgress() {
    this.enterProgressService
      .enterTaskProgress(this.progress)
      .pipe(
        filterNullish(),
        mergeMap((data) =>
          this.service
            .putTaskProgress(this.progress._id, data)
            .pipe(map(() => data))
        ),
        tap((data) => {
          this.progress.grade = data.grade
          this.progress.status = data.status
        }),
        catchError((err) => {
          this.ui.showToast('Note konnte nicht gesetzt werden')
          return err
        })
      )
      .subscribe()
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded
  }

  get task() {
    return this.progress.task
  }
}
