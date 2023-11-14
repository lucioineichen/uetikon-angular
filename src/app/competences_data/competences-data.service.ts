import { Injectable } from '@angular/core'
import { competences } from './competences.data'
import { uk } from './uk.data'

@Injectable({
  providedIn: 'root',
})
export class CompetencesDataService {
  get_competences() {
    return competences.concat(this.get_uk())
  }

  get_uk() {
    return uk
  }
}
