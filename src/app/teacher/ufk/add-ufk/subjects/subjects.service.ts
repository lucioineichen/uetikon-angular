import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { environment } from 'src/app/environment/environment.demo'
import { AddUfkService } from '../add-ufk.service'
import { UiService } from 'src/app/common/ui.service'
import { FormControl } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  subjects$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )
  control: FormControl

  constructor(
    private http: HttpClient,
    private service: AddUfkService,
    private ui: UiService
  ) {
    this.control = this.service.form.get('subject') as FormControl
  }

  updateSubjects() {
    return this.getsubjects()
      .pipe(
        tap((subjects) => this.subjects$.next(subjects)),
        tap((subjects) =>
          this.service.form.get('subject')?.setValue(subjects[0]._id)
        ),
        catchError((err) => {
          this.ui.showToast('Fächer konnten nicht geladen werden')
          this.subjects$.error('server')
          return err
        })
      )
      .subscribe()
  }

  private getsubjects() {
    return this.http.get<{ _id: number; name: string }[]>(
      `${environment.baseUrl}/teacher/subjects`
    )
  }
}
