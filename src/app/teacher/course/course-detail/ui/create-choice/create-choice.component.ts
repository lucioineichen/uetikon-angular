import { Component, OnDestroy, OnInit } from '@angular/core'
import { CreateChoiceService } from './create-choice.service'
import { SubSink } from 'subsink'
import { BehaviorSubject, combineLatest, filter, map, tap } from 'rxjs'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-create-choice',
  templateUrl: './create-choice.component.html',
  styleUrls: ['./create-choice.component.css'],
})
export class CreateChoiceComponent implements OnInit, OnDestroy {
  form!: FormGroup
  readonly sink = new SubSink()

  constructor(private service: CreateChoiceService, private fb: FormBuilder) {}

  get dependent() {
    return this.form.get('dependent') as FormControl<IRef | undefined>
  }

  get name() {
    return this.form.get('name') as FormControl<string | undefined>
  }

  get choiceList() {
    return this.form.get('choiceList') as FormControl<IStudyJob[]>
  }

  logChoiceList() {
    console.log(this.choiceList)
  }

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
      choiceList: [
        [],
        [Validators.required, Validators.minLength(2), Validators.maxLength(7)],
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

  addChoice() {
    const sub = this.service
      .addChoice()
      .pipe(
        tap(console.info),
        filter((job) => {
          const unholyIndex = this.choiceList.value.findIndex(
            (listJob) => listJob._id == job._id
          )
          return unholyIndex == -1
        }),
        tap((job) => {
          this.choiceList.patchValue(this.choiceList.value.concat(job))
        })
      )
      .subscribe()

    this.sink.add(sub)
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
