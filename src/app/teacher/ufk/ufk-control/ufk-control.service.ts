import { Injectable } from '@angular/core'
import { UfkService } from '../ufk.service'
import { BehaviorSubject, map, pipe, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { HttpClient } from '@angular/common/http'
import { SelectCompetencesService } from 'src/app/common/select-competences-form/select-competences.service'
import { filterNullish } from 'src/app/common/common'
import { FormControl } from '@angular/forms'
import { ICompetence } from 'src/app/competences_data/competences.data'

@Injectable({
  providedIn: 'root',
})
export class UfkControlService {
  ufkControl = new FormControl(0)
  selectedUfks$ = this.service.selectedUfks$
  students$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )

  constructor(
    private select: SelectCompetencesService,
    private service: UfkService,
    private http: HttpClient,
    private ui: UiService
  ) {
    this.selectedUfks$.pipe().subscribe()
  }

  setCompetences = pipe(
    filterNullish<ICompetence[]>(),
    map((competences: ICompetence[]) => competences.map((comp) => comp._id)),
    tap((comps) => this.selectedUfks$.next(comps)),
    tap((comps) => {
      if (comps.length === 0) this.ufkControl.setValue(0)
      else this.ufkControl.setValue(1)
    })
  )

  selectCompetences() {
    return this.select.selectCompetences(this.selectedUfks$.value, 'uk')
  }
}
