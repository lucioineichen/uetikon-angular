import { Component } from '@angular/core'

@Component({
  selector: 'app-add-study-material',
  template: `
    <h1 mat-dialog-title>LernMaterial Hinzufügen</h1>
    <div mat-dialog-content style="min-width: 400px;">
      <app-file-upload
        (select-file)="selectFile($event)"
        (discard-file)="discardFile()"
      ></app-file-upload>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button mat-button [disabled]="!file" [mat-dialog-close]="file">
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class AddStudyMaterialComponent {
  file?: File
  selectFile(file: File) {
    this.file = file
  }
  discardFile() {
    this.file = undefined
  }
}
