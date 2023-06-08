import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { SubSink } from 'subsink'
import { CreateUserService } from './create-user.service'
import { UiService } from '../common/ui.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: [],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  createUserForm!: FormGroup

  constructor(
    private createUserService: CreateUserService,
    private formBuilder: FormBuilder,
    private uiService: UiService
  ) {}

  ngOnInit() {
    console.warn('This component is only for demo purposes.')
    this.buildcreateUserForm()
  }

  ngOnDestroy(): void {
    console.log('create user destroyed')
    this.subs.unsubscribe()
  }

  buildcreateUserForm() {
    this.createUserForm = this.formBuilder.group({
      email: ['email@test.com', [Validators.required, Validators.email]],
      password: [
        'password',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
      firstName: [
        'Max',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      lastName: [
        'Mustermann',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      role: ['teacher'],
    })
  }

  async createUser(submittedForm: FormGroup) {
    this.subs.sink = this.createUserService
      .createUser(
        submittedForm.value.email,
        submittedForm.value.password,
        submittedForm.value.firstName,
        submittedForm.value.lastName,
        submittedForm.value.role
      )
      .subscribe({
        next: (response) => {
          response
            ? this.uiService.showToast('Erfolgreich Benutzer erstellt')
            : this.uiService.showToast(
                'Fehler, Benutzer konnte nicht erstellt werden'
              )
        },
        error: (err) => {
          this.uiService.showToast(
            'Fehler, Benutzer konnte nicht erstellt werden'
          )
        },
      })
  }
}
