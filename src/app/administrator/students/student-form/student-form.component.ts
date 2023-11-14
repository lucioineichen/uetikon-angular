import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UiService } from 'src/app/common/ui.service'
import { StudentFormService } from './student-form.service'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  readonly classes$ = this.service.classes$
  studentForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: StudentFormService,
    private dialogRef: MatDialogRef<StudentFormComponent>
  ) {}

  ngOnInit(): void {
    this.service.updateClasses(this.dialogRef)

    this.studentForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      middleName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      class_ids: ['', [Validators.required]],
      grade: ['', [Validators.required]],
    })
  }
}
