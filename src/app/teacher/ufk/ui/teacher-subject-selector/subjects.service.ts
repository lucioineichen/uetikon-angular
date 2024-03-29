import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, of, tap } from 'rxjs'
import { AddUfkService } from '../add-ufk/add-ufk.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { FormControl } from '@angular/forms'
import { environment } from 'src/app/core/environment/environment.demo'
import { CompetencesDataService } from 'src/app/shared/data/competences_data/competences-data.service'

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  subjects$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )
  control: FormControl

  constructor(
    private data: CompetencesDataService,
    private service: AddUfkService,
    private ui: DialogService
  ) {
    this.control = this.service.form.get('subject') as FormControl
  }

  updateSubjects() {
    return this.getsubjects()
      .pipe(
        tap(console.log),
        tap((subjects) => this.subjects$.next(subjects)),
        tap((subjects) => {
          if (subjects.length > 0)
            this.service.form.get('subject')?.setValue(subjects[0]._id)
          else this.service.form.get('subject')?.setValue(undefined)
        }),
        catchError((err) => {
          this.ui.showToast('Fächer konnten nicht geladen werden')
          this.subjects$.error(err)
          return err
        })
      )
      .subscribe()
  }

  private getsubjects() {
    return of(this.data.get_subjects())
  }
}
