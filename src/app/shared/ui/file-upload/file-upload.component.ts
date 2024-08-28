import { Component } from '@angular/core'

@Component({
  selector: 'app-file-upload',
  template: `
    <input
      type="file"
      class="file-input"
      (change)="onFileSelected($event)"
      #fileUpload
    />

    <div class="file-upload">
      {{ fileName || 'No file uploaded yet.' }}

      <button
        mat-mini-fab
        color="primary"
        class="upload-btn"
        (click)="fileUpload.click()"
      >
        <mat-icon>attach_file</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .file-input {
        display: none;
      }
    `,
  ],
})
export class FileUploadComponent {
  fileName?: string
  onFileSelected(event: any) {}
}
