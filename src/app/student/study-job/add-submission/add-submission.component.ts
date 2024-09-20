import { Component, Inject } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-add-submission',
  template: `<h1 mat-dialog-title>{{ name | titlecase }}</h1>

    <div mat-dialog-content class="mat-typography content">
      <h3>Abgabe Hinzufügen</h3>
      <app-file-upload
        (discard-file)="discardFile()"
        (select-file)="selectFile($event)"
      ></app-file-upload>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button mat-button [disabled]="!this.file" [mat-dialog-close]="this.file">
        Speichern
      </button>
    </mat-dialog-actions> `,
  styles: [
    `
      .content {
        width: 500px;
      }
    `,
  ],
})
export class AddSubmissionComponent {
  file: File | null = null

  constructor(@Inject(MAT_DIALOG_DATA) protected name: string) {}

  discardFile() {
    this.file = null
  }

  selectFile(file: File) {
    this.file = file
  }
}
