import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { CreateStudentsByJsonService } from './create-students-by-json.service'
import { catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-create-students-by-json',
  template: `
    <mat-dialog-content
      class="mat-typography"
      style="width: 600px; padding: 20px"
    >
      <h2>Schüler Erstellen</h2>
      <form fxLayout="column" style="padding: 0 30px 0 30px">
        <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="10px">
          <mat-form-field fxFlex style="width: 100%;">
            <textarea
              matInput
              placeholder="Json"
              aria-label="Json"
              [formControl]="json"
              style="min-height: 300px"
            ></textarea>

            <mat-error *ngIf="json.hasError('required')">
              Json ist notwenig
            </mat-error>
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close cdkFocusInitial>Abrechen</button>
      <button mat-button (click)="uploadJson()" [disabled]="json.invalid">
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class CreateStudentsByJsonComponent {
  json = new FormControl('', Validators.required)

  constructor(
    private dialogRef: MatDialogRef<CreateStudentsByJsonComponent>,
    private service: CreateStudentsByJsonService,
    private ui: DialogService
  ) {}

  uploadJson() {
    if (!this.json.value) return
    this.service
      .dumpPostStudents(this.json.value)
      .pipe(
        tap(() => {
          this.ui.showToast('Schüler konnten erstellt werden')
          this.dialogRef.close()
        }),
        catchError((err) => {
          this.ui.showToast('Schüler konnten nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }
}
