import { Component, Inject, OnInit } from '@angular/core'
import { ChooseDependencyService } from './choose-dependency.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { IRef } from 'src/app/shared/utils/interfaces'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { tap } from 'rxjs'

@Component({
  selector: 'app-choose-dependency',
  templateUrl: './choose-dependency.component.html',
  styleUrls: ['./choose-dependency.component.css'],
})
export class ChooseDependencyComponent implements OnInit {
  form!: FormGroup

  get dependentControl() {
    return this.form.get('dependent') as FormControl<string | undefined>
  }

  get selectedContainer(): IRef | undefined {
    const id = this.dependentControl.value
    if (id) {
      return this.service.containerList$
        .getValue()
        ?.find((container) => container._id == Number(id))
    }
    return undefined
  }

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private initialContainer: { _id: number; name: string },
    protected service: ChooseDependencyService,
    private fb: FormBuilder
  ) {}

  private buildForm() {
    this.form = this.fb.group({
      dependent: [undefined, Validators.required],
    })
  }

  ngOnInit(): void {
    this.buildForm()
    if (this.initialContainer) {
      const container = this.service.containerList$
        .getValue()
        ?.find((container) => container._id == this.initialContainer._id)
      if (container) {
        this.form.patchValue({ dependent: '' + container._id })
        this.service.containerList$
          .pipe(
            tap(() =>
              setTimeout(
                () =>
                  this.form.patchValue({
                    dependent: this.form.value.dependent,
                  }),
                0
              )
            )
          )
          .subscribe()
      }
    }
  }
}
