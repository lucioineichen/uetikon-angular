import { Component, Inject } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IRef } from '../../utils/interfaces'

@Component({
  selector: 'app-chooser',
  template: `
    <h1 mat-dialog-title>{{ this.data.message }}</h1>
    <div mat-dialog-content>
      <mat-chip-listbox
        [formControl]="control"
        ngDefaultControl
        name="fieldName"
      >
        <mat-chip-option
          [mat-dialog-close]="object._id"
          *ngFor="let object of data.objects"
          [value]="object._id"
          >{{ object.name }}</mat-chip-option
        >
      </mat-chip-listbox>
    </div>
    <!-- <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!control.valid"
        [mat-dialog-close]="control.value"
      >
        Speichern
      </button>
    </mat-dialog-actions> -->
  `,
  styles: [],
})
export class ChooserComponent {
  control!: FormControl

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    protected data: { message: string; objects: IRef[]; selected?: number }
  ) {}

  ngOnInit(): void {
    this.control = this.fb.control(this.data.selected, [Validators.required])
  }
}
