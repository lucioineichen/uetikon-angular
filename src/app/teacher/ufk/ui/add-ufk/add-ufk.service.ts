import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { AddUfkComponent } from './add-ufk.component'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ISubCompetence } from 'src/app/shared/data/competences_data/competences.data'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { environment } from 'src/app/core/environment/environment.demo'
import { SelectCompetencesService } from 'src/app/shared/ui/select-competences/select-competences.service'

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
    private ui: DialogService,
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
          ? this.competenceControl.value.map((comp: ISubCompetence) => comp._id)
          : undefined,
        'uk'
      )
      .pipe(
        filterNullish(),
        tap((data) => this.competenceControl.setValue(data.subCompetences))
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
    data.competence = data.competence[0]._id
    console.log(data)
    return this.http.post<any>(`${environment.baseUrl}/teacher/ufks`, data)
  }
}
