import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  filter,
  map,
  mergeMap,
  startWith,
  tap,
} from 'rxjs'
import { IStudent, Student } from 'src/app/interfaces'
import { SelectStudentsService } from 'src/app/common/select-students/select-students.service'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { AddUfkComponent } from './add-ufk.component'
import { filterNullish } from 'src/app/common/common'
import { SelectCompetencesService } from 'src/app/common/select-competences-form/select-competences.service'
import { ICompetence } from 'src/app/competences_data/competences.data'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class AddUfkService {
  form!: FormGroup
  titleControl!: FormControl
  gradeControl!: FormControl
  commentControl!: FormControl
  competenceControl!: FormControl

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private selectComps: SelectCompetencesService,
    private ui: UiService,
    private builder: FormBuilder
  ) {}

  addUfk() {
    this.initForm()
    const dialogRef = this.dialog.open(AddUfkComponent)

    return dialogRef.afterClosed()
  }

  private initForm() {
    this.form = this.builder.group({
      title: [
        null,
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(2),
        ],
      ],
      student: [null, Validators.required],
      grade: [1, Validators.required],
      subject: [null, Validators.required],
      comment: [],
      competence: [],
    })

    this.titleControl = this.form.get('title') as FormControl
    this.gradeControl = this.form.get('grade') as FormControl
    this.commentControl = this.form.get('comment') as FormControl
    this.competenceControl = this.form.get('competence') as FormControl
  }

  chooseCompetences() {
    this.selectComps
      .selectCompetences(
        this.competenceControl.value
          ? [this.competenceControl.value]
          : undefined,
        'uk'
      )
      .pipe(
        filterNullish(),
        tap((comps) => this.competenceControl.setValue(comps[0]._id))
      )
      .subscribe()
  }

  save() {
    if (this.form.invalid) return

    this.postUfk(this.form.value)
      .pipe(
        tap(() => this.ui.showToast('Erfolgreich ÜFK hinzugefügt')),
        catchError((err) => {
          this.ui.showToast('UFK konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  private postUfk(data: any) {
    return this.http.post<any>(`${environment.baseUrl}/teacher/ufks`, data)
  }
}
