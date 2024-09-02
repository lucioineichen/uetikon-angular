import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ITaskProgress } from '../../utils/interfaces'
import { EditTaskProgressTableService } from './edit-task-progress-table.service'
import { EnterTaskProgressService } from '../enter-task-progress/enter-task-progress.service'
import { filterNullish } from '../../utils/filternullish'
import { DialogService } from '../dialogs/ui.service'
import { catchError, mergeMap, tap } from 'rxjs'

@Component({
  selector: 'app-edit-task-progress-table [task-progress-list]',
  templateUrl: './edit-task-progress-table.component.html',
  styleUrls: ['./edit-task-progress-table.component.css'],
})
export class EditTaskProgressTableComponent {
  @Input('task-progress-list') progressList!: ITaskProgress[]
  @Output('updated') updated = new EventEmitter<true>()

  readonly headers = [
    { name: 'Aufgabe', width: 25 },
    { name: 'Note', width: 25 },
    { name: 'Erfüllt', width: 25 },
    { name: 'Eingeben', width: 25 },
  ]

  constructor(
    private service: EditTaskProgressTableService,
    private enterService: EnterTaskProgressService,
    private ui: DialogService
  ) {}

  enterTaskProgress(taskProg: ITaskProgress) {
    this.enterService
      .enterTaskProgress(taskProg)
      .pipe(
        filterNullish(),
        mergeMap((data) => this.service.putTaskProgress(taskProg._id, data)),
        tap(() => {
          this.updated.emit(true)
        }),
        catchError((err) => {
          this.ui.showToast('Fortschritt konnte nicht angepasst werden')
          return err
        })
      )
      .subscribe()
  }
}
