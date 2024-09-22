import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IUfk } from '../../ufk.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-ufk-table [ufks]',
  templateUrl: './ufk-table.component.html',
  styleUrls: ['./ufk-table.component.css'],
})
export class UfkTableComponent {
  @Input() ufks!: IUfk[]
  @Output() delete = new EventEmitter<IUfk>()

  constructor(private ui: DialogService) {}

  editUfk(ufk: IUfk) {
    this.ui.showToast('Funktion nicht implementiert')
  }
  deleteUfk(ufk: IUfk) {
    this.delete.emit(ufk)
  }

  toggleExpanded(id: number) {
    if (id == this.expandedElement) this.expandedElement = undefined
    else this.expandedElement = id
  }

  expandedElement?: number

  readonly headers = [
    { name: '', width: 5 },
    { name: 'Schüler', width: 13 },
    { name: 'Lehrer', width: 13 },
    { name: 'Titel', width: 13 },
    { name: 'Kompetenz', width: 21 },
    { name: 'Kurs', width: 10 },
    { name: 'Fach', width: 10 },
    { name: 'Datum', width: 10 },
    { name: '', width: 5 },
  ]
}
