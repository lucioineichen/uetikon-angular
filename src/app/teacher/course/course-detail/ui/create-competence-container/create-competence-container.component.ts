import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SubSink } from 'subsink'
import { CreateCompetenceContainerService } from './create-competence-container.service'
import { ICompetence, IRef, IStringRef } from 'src/app/shared/utils/interfaces'
import { map, tap } from 'rxjs'
// import { SelectCompetencesService } from 'src/app/shared/ui/select-competences/select-competences.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { PickCompetenceListService } from 'src/app/shared/ui/pick-competence-list/pick-competence-list.service'

@Component({
  selector: 'app-create-competence-container',
  templateUrl: './create-competence-container.component.html',
  styleUrls: ['./create-competence-container.component.css'],
})
export class CreateCompetenceContainerComponent implements OnInit, OnDestroy {
  readonly sink = new SubSink()
  form!: FormGroup

  get dependent() {
    return this.form.get('dependent') as FormControl<IRef | undefined>
  }

  get name() {
    return this.form.get('name') as FormControl<string | undefined>
  }

  get competenceList() {
    return this.form.get('competenceList') as FormControl<IStringRef[]>
  }

  constructor(
    private fb: FormBuilder,
    private service: CreateCompetenceContainerService,
    private pickCompetence: PickCompetenceListService
  ) {}

  private buildForm() {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      competenceList: [
        [],
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20),
        ],
      ],
      dependent: [undefined],
    })
  }

  ngOnInit(): void {
    this.buildForm()
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }

  addCompetence() {
    this.pickCompetence
      .pickCompetenceList(this.competenceList.value.map((comp) => comp._id))
      .pipe(
        filterNullish(),
        map((competenceList) =>
          competenceList.map((comp) => {
            return { _id: comp._id, name: comp.name }
          })
        ),
        tap((competenceList) => this.competenceList.patchValue(competenceList))
      )
      .subscribe()
  }

  removeCompetence() {
    throw Error('not implemented')
  }

  addDependet() {
    if (this.form.invalid) return
    const sub = this.service
      .chooseDependent(this.name.value as string, this.dependent.value)
      .pipe(
        tap((dependent) => {
          this.dependent.patchValue(dependent)
        })
      )
      .subscribe()
    this.sink.add(sub)
  }

  removeDependent() {
    this.dependent.patchValue(undefined)
  }
}
