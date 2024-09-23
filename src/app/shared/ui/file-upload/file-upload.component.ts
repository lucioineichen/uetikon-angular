import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'

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
      <button
        mat-icon-button
        *ngIf="fileName"
        (click)="onDiscardFile()"
        style="transform: translateY(4px); font-size: 16px"
      >
        <mat-icon>delete</mat-icon>
      </button>
      <span>{{ fileName || 'Kein Dokument Ausgewählt' }}</span>

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
    `
      .upload-btn {
        margin-left: 10px;
      }
    `,
  ],
})
export class FileUploadComponent implements OnInit {
  @Output('select-file') selectFileEvent = new EventEmitter<File>()
  @Output('discard-file') discardFileEvent = new EventEmitter<true>()
  @Input('file-name') initialFileName?: string
  fileName?: string

  constructor() {}

  ngOnInit(): void {
    if (this.initialFileName) this.fileName = this.initialFileName
  }

  onFileSelected(event: Event) {
    if ((event.target as any).files.length == 0) return
    this.fileName = (event.target as any).files[0].name
    this.selectFileEvent.emit((event.target as any).files[0])
  }

  onDiscardFile() {
    this.fileName = undefined
    this.discardFileEvent.emit(true)
  }
}
