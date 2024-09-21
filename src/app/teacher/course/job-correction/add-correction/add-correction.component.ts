import { Component, Inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-add-correction',
  template: `
    <h1 mat-dialog-title>{{ name | titlecase }}</h1>

    <div mat-dialog-content class="mat-typography content">
      <h3>Korrektur Hinzufügen</h3>
      <app-file-upload
        (discard-file)="discardFile()"
        (select-file)="selectFile($event)"
      ></app-file-upload>
      <mat-form-field style="width: 100%; margin-top: 15px">
        <mat-label>Text</mat-label>
        <textarea
          matInput
          placeholder="Text"
          aria-
          label="Text"
          [formControl]="textCtr"
        ></textarea>
      </mat-form-field>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!this.file && !this.textCtr.value"
        [mat-dialog-close]="{file, text: textCtr.value}"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .content {
        width: 500px;
      }
    `,
  ],
})
export class AddCorrectionComponent {
  textCtr = new FormControl()
  file: File | null = null

  constructor(@Inject(MAT_DIALOG_DATA) protected name: string) {}

  discardFile() {
    this.file = null
  }

  selectFile(file: File) {
    this.file = file
  }
}
