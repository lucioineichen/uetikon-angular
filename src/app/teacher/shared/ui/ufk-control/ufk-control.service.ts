import { Injectable } from '@angular/core'
import { UfkService } from '../../../ufk/ufk.service'
import { map, pipe, tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { FormControl } from '@angular/forms'
import { ISubCompetence } from 'src/app/shared/data/competences_data/competences.data'
// import { SelectCompetencesService } from 'src/app/shared/ui/select-competences/select-competences.service'

@Injectable({
  providedIn: 'root',
})
export class UfkControlService {
  ufkControl = new FormControl(0)
  selectedUfks$ = this.service.selectedUfks$

  constructor(private service: UfkService) {
    this.selectedUfks$.pipe().subscribe()
  }

  setCompetences = pipe(
    filterNullish<ISubCompetence[]>(),
    map((competences: ISubCompetence[]) => competences.map((comp) => comp._id)),
    tap((comps) => this.selectedUfks$.next(comps)),
    tap((comps) => {
      if (comps.length === 0) this.ufkControl.setValue(0)
      else this.ufkControl.setValue(1)
    })
  )

  selectCompetences() {
    throw Error('deleted functionality')
  }
}
