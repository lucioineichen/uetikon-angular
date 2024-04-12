import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ChooseDependencyService } from './choose-dependency.service'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { IStudyJob } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-choose-dependency',
  templateUrl: './choose-dependency.component.html',
  styleUrls: ['./choose-dependency.component.css'],
})
export class ChooseDependencyComponent {
  readonly form = this.fb.group({ dependend: [null, Validators.required] })

  get dependendControl() {
    return this.form.get('dependend') as FormControl<IStudyJob | null>
  }

  constructor(
    protected service: ChooseDependencyService,
    private fb: FormBuilder
  ) {}
}
