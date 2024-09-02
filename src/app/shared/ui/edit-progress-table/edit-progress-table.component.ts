import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IProgress } from '../../utils/interfaces'
import { BehaviorSubject } from 'rxjs'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-edit-progress-table [progress-list]',
  templateUrl: './edit-progress-table.component.html',
  styleUrls: ['./edit-progress-table.component.css'],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: 0,
          overflow: 'hidden',
          marginBottom: 0,
          display: 'none',
        })
      ),
      state('expanded', style({ overflow: 'hidden' })),

      transition('collapsed => expanded', [
        style({}),
        animate('300ms ease-out'),
      ]),
      transition('expanded => collapsed', [animate('300ms ease-out')]),
    ]),
  ],
})
export class EditProgressTableComponent {
  @Input('progress-list') progressList!: IProgress[]
  @Output('updated') updated = new EventEmitter<true>()

  readonly index$ = new BehaviorSubject<number>(-1)

  readonly headers = [
    { name: 'LernJob', width: 25 },
    { name: 'Note', width: 17 },
    { name: 'Fortschritt', width: 17 },
    { name: 'Kompetenzen', width: 35 },
  ]

  toggleIndex(i: number) {
    if (this.index$.value == i) this.index$.next(-1)
    else this.index$.next(i)
  }

  update() {
    this.updated.emit(true)
  }
}
