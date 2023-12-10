import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UiService } from 'src/app/common/ui.service'

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styles: [],
})
export class TeacherFormComponent implements OnInit {
  createUserForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private uiService: UiService) {}

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
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
    })
  }
}