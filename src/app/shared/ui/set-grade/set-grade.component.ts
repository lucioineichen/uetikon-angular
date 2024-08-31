import { Component, Inject } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-set-grade',
  template: `
    <h1 mat-dialog-title>{{ this.data.message }}</h1>
    <div mat-dialog-content>
      <form fxLayout="column">
        <mat-form-field fxFlex style="width: 100%">
          <mat-label>Note</mat-label>
          <input
            matInput
            placeholder="Note"
            aria-label="Note"
            [formControl]="gradeControl"
            required
            type="number"
          />
          <mat-error *ngIf="gradeControl.hasError('required')">
            Note ist obligatorisch
          </mat-error>
        </mat-form-field>
      </form>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!gradeControl.valid"
        [mat-dialog-close]="gradeControl.value"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class SetGradeComponent {
  gradeControl!: FormControl

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) protected data: { message: string; grade: number }
  ) {}

  ngOnInit(): void {
    this.gradeControl = this.fb.control(this.data.grade, [Validators.required])
  }
}
