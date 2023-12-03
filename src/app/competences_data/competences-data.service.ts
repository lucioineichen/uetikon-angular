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

  get_subjects(): { _id: string; name: string }[] {
    return competences.concat(this.get_uk()).map((subject) => {
      return { _id: subject._id, name: subject.name }
    })
  }
}
