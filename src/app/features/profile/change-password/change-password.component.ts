import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { PasswordValidators } from 'src/app/shared/utils/password-validators'
import { ChangePasswordService } from './change-password.service'
import { catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { ValidateOldPasswordService } from 'src/app/shared/utils/validate-old-password.service'

@Component({
  selector: 'app-change-password',
  template: `<h1 mat-dialog-title>Passwort Ändern</h1>
    <div mat-dialog-content>
      <form fxLayout="column" [formGroup]="passwordForm">
        <mat-form-field fxFlex style="width: 100%">
          <mat-label>Altes Passwort</mat-label>
          <input
            matInput
            placeholder="Altes Passwort"
            aria-label="Altes Passwort"
            formControlName="oldPassword"
          />
          <mat-error
            *ngIf="passwordForm.get('oldPassword')?.hasError('required')"
          >
            Altes Passwort ist notwenig
          </mat-error>
          <mat-error
            *ngIf="
              passwordForm.get('oldPassword')?.hasError('oldPasswordInvalid')
            "
          >
            Altes Passwort ist falsch
          </mat-error>
        </mat-form-field>
        <div formGroupName="newPassword">
          <mat-form-field fxFlex style="width: 100%">
            <mat-label>Neues Passwort</mat-label>
            <input
              matInput
              placeholder="Neues Passwort"
              aria-label="Neues Passwort"
              formControlName="password"
            />
            <mat-error
              *ngIf="
                passwordForm
                  .get('newPassword')
                  ?.get('password')
                  ?.hasError('required')
              "
            >
              Neues Passwort ist notwenig
            </mat-error>
          </mat-form-field>
          <mat-form-field fxFlex style="width: 100%">
            <mat-label>Wiederholtes Passwort</mat-label>
            <input
              matInput
              placeholder="Wiederholtes Passwort"
              aria-label="Wiederholtes Passwort"
              formControlName="confirmPassword"
            />
            <mat-error
              *ngIf="
                passwordForm
                  .get('newPassword')
                  ?.get('confirmPassword')
                  ?.hasError('required')
              "
            >
              Wiederholtes Passwort ist notwenig
            </mat-error>
            <mat-error
              *ngIf="passwordForm.get('newPassword')?.hasError('dontMatch')"
            >
              Passwörter stimmen nicht überein
            </mat-error>
          </mat-form-field>
        </div>
      </form>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!passwordForm.valid"
        (click)="setNewPassword()"
      >
        Speichern
      </button>
    </mat-dialog-actions>`,
  styles: [],
})
export class ChangePasswordComponent implements OnInit {
  passwordForm!: FormGroup

  constructor(
    private ui: DialogService,
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    private fb: FormBuilder,
    protected service: ChangePasswordService,
    private validateOldPasswordService: ValidateOldPasswordService
  ) {}

  printForm() {
    console.log(this.passwordForm.get('newPassword')?.hasError('dontMatch'))
  }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      oldPassword: [
        '',
        Validators.required,
        PasswordValidators.correctOldPassword(this.validateOldPasswordService),
      ],
      newPassword: this.fb.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },
        { validators: [PasswordValidators.match] }
      ),
    })
  }

  setNewPassword() {
    if (!this.passwordForm.valid) return
    this.service
      .setNewPassword(this.passwordForm.value.newPassword.password)
      .pipe(
        tap(() => {
          this.ui.showToast('Passwort erfolgreich geändert!')
          this.dialogRef.close()
        }),
        catchError((err) => {
          this.ui.showToast('Passwort konnte nicht geändert werden')
          return err
        })
      )
      .subscribe()
  }
}
