import { Component, Input } from '@angular/core'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IUfk } from 'src/app/teacher/ufk/ufk.service'
import { WriteReflectionService } from '../write-reflection/write-reflection.service'
import { IReflection } from '../../competences.component'
import { catchError, mergeMap, tap } from 'rxjs'
import { UfkReflectionTableService } from './ufk-reflection-table.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Component({
  selector: 'app-ufk-reflection-table',
  templateUrl: './ufk-reflection-table.component.html',
  styleUrls: ['./ufk-reflection-table.component.css'],
})
export class UfkReflectionTableComponent {
  @Input() ufks!: IUfk[]
  @Input() reflections!: IReflection[]
  expandedUfk?: number
  expandedReflection?: number

  constructor(
    private ui: DialogService,
    private writeReflextionService: WriteReflectionService,
    private service: UfkReflectionTableService
  ) {}

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

  readonly headers = [
    { name: 'Lehrer', width: 17 },
    { name: 'Titel', width: 17 },
    { name: 'Kompetenz', width: 24 },
    { name: 'Kurs', width: 14 },
    { name: 'Fach', width: 14 },
    { name: 'Datum', width: 14 },
  ]

  writeReflection(ufk: IUfk) {
    this.writeReflextionService
      .writeReflection(ufk)
      .pipe(
        filterNullish(),
        mergeMap((data) => this.service.postReflection(data, ufk._id)),
        tap((reflection) => (ufk.reflection = reflection)),
        catchError((err) => {
          this.ui.showToast('Reflexion konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }
}
