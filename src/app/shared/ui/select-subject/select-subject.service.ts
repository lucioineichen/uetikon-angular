import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { CompetencesDataService } from '../../data/competences_data/competences-data.service'

@Injectable({
  providedIn: 'root',
})
export class SelectSubjectService {
  constructor(private competenceService: CompetencesDataService) {}

  getSubjectList(): Observable<{ _id: string; name: string }[]> {
    return of(this.competenceService.get_subjects())
  }
}
