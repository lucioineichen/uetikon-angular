import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IUfk } from '../../ufk.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IReflection } from 'src/app/student/competence/competences.component'

@Component({
  selector: 'app-ufk-table [ufks]',
  templateUrl: './ufk-table.component.html',
  styleUrls: ['./ufk-table.component.css'],
})
export class UfkTableComponent {
  @Input() ufks!: IUfk[]
  @Input() reflections!: IReflection[]
  @Output() delete = new EventEmitter<IUfk>()

  constructor(private ui: DialogService) {}

  addUfk(reflection: IReflection) {}

  editUfk(ufk: IUfk) {
    this.ui.showToast('Funktion nicht implementiert')
  }
  deleteUfk(ufk: IUfk) {
    this.delete.emit(ufk)
  }

  toggleUfk(id: number) {
    this.expandedReflection = undefined
    if (id == this.expandedUfk) this.expandedUfk = undefined
    else this.expandedUfk = id
  }

  toggleReflection(id: number) {
    this.expandedUfk = undefined
    if (id == this.expandedReflection) this.expandedReflection = undefined
    else this.expandedReflection = id
  }

  expandedReflection?: number
  expandedUfk?: number

  readonly headers = [
    // { name: '', width: 5 },
    { name: 'Schüler', width: 15 },
    { name: 'Lehrer', width: 15 },
    { name: 'Titel', width: 15 },
    { name: 'Kompetenz', width: 22 },
    { name: 'Kurs', width: 11 },
    { name: 'Fach', width: 11 },
    { name: 'Datum', width: 13 },
    // { name: '', width: 5 },
  ]
}
