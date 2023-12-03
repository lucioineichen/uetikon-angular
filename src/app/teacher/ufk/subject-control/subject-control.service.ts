import { Injectable } from '@angular/core'
import { UfkService } from '../ufk.service'
import { BehaviorSubject, catchError, of, tap } from 'rxjs'
import { CompetencesDataService } from 'src/app/competences_data/competences-data.service'
import { UiService } from 'src/app/common/ui.service'

@Injectable({
  providedIn: 'root',
})
export class SubjectControlService {
  subjects$ = new BehaviorSubject<{ _id: string; name: string }[] | undefined>(
    undefined
  )

  constructor(private data: CompetencesDataService, private ui: UiService) {}

  update() {
    of(this.data.get_subjects())
      .pipe(
        tap((subjects) => this.subjects$.next(subjects)),
        catchError((err) => {
          this.ui.showToast('Fächer konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
