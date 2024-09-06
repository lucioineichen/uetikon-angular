import { Injectable } from '@angular/core'
import { CompetencesDataService } from '../../data/competences_data/competences-data.service'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SubjectControlService {
  constructor(private competenceService: CompetencesDataService) {}
  getSubjectList() {
    return of(this.competenceService.get_subjects())
  }
}
