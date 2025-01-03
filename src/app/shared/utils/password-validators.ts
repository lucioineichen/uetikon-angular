import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms'
import { catchError, debounceTime, map, of, switchMap } from 'rxjs'
import { ValidateOldPasswordService } from './validate-old-password.service'

export class PasswordValidators {
  static match(control: AbstractControl) {
    console.log('check new passwords match')

    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')
    if (password?.value !== confirmPassword?.value) {
      return { dontMatch: true }
    }
    return null
  }

  static correctOldPassword(
    passwordService: ValidateOldPasswordService
  ): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return of(null) // No validation errors if the control is empty
      }

      return of(control.value).pipe(
        debounceTime(300), // Optional: Add a debounce to reduce API calls
        switchMap((oldPassword) =>
          passwordService.validateOldPassword(oldPassword).pipe(
            map((isValid) => (isValid ? null : { oldPasswordInvalid: true })), // No errors if valid
            catchError((err) => of({ oldPasswordInvalid: true })) // Error case
          )
        )
      )
    }
  }
}
