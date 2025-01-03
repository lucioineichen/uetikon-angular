import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AddStudentService } from './student-form.service'

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
    private service: AddStudentService
  ) {}

  ngOnInit(): void {
    this.service.updateClasses()

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
      classList: ['', [Validators.required]],
      grade: ['', [Validators.required]],
    })
  }
}
