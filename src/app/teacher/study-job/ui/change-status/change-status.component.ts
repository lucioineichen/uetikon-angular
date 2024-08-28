import { Component, Inject } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-change-status',
  template: `
    <h1 mat-dialog-title>Status Ändern</h1>

    <div mat-dialog-content>
      <mat-radio-group
        aria-labelledby="example-radio-group-label"
        class="example-radio-group"
        [formControl]="statusCtrl"
      >
        <mat-radio-button class="example-radio-button" [value]="1">
          Nicht Begonen
        </mat-radio-button>
        <mat-radio-button class="example-radio-button" [value]="2">
          In Bearbeitung
        </mat-radio-button>
        <mat-radio-button class="example-radio-button" [value]="3">
          Fertig
        </mat-radio-button>
      </mat-radio-group>
    </div>

    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!statusCtrl.valid"
        [mat-dialog-close]="statusCtrl.value"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class ChangeStatusComponent {
  statusCtrl!: FormControl

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: { status?: number }
  ) {}

  ngOnInit(): void {
    this.statusCtrl = this.fb.control(this.data.status, [Validators.required])
  }
}
