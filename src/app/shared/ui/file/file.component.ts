import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { IFile } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-file',
  template: `
    <div class="file-container">
      <div
        class="file"
        [ngClass]="getFileIcon(file.extension)"
        *ngIf="getFileIcon(file.extension); else picture"
      ></div>

      <ng-template #picture>
        <img
          *ngIf="isPicture(file.extension)"
          [src]="file.url"
          alt="task-picture"
          style="width: 30px; height: 30px; padding-right: 10px"
        />
      </ng-template>

      <a [href]="getSafeFileUrl(file.url)" target="_blank" class="file-link">{{
        file.name
      }}</a>
    </div>
  `,
  styles: [
    `
      .file-link {
        display: inline-block;
        text-decoration: none;
        color: #0366d6; /* Link color */
      }

      /* Hover effect */
      .file-link:hover {
        text-decoration: underline;
      }
    `,
    `
      .task-card {
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
          0 2px 10px 0 rgba(0, 0, 0, 0.12);
        padding: 16px;
        margin-bottom: 16px;
      }

      .file-container {
        display: flex;
        align-items: center;
        margin-top: 16px;
      }

      .file {
        width: 32px;
        height: 32px;
        margin-right: 8px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      .pdf {
        background-image: url('src/assets/pdf.png');
      }

      .word {
        background-image: url('src/assets/word.png');
      }

      .excel {
        background-image: url('src/assets/excel.png');
      }
    `,
  ],
})
export class FileComponent {
  @Input() file!: IFile

  constructor(private domSanitizer: DomSanitizer) {}

  isPicture(extension: string) {
    if (extension === 'png') return true
    return false
  }

  getFileIcon(extension: string | undefined): string {
    switch (extension) {
      case 'pdf':
        return 'pdf'
      case 'doc':
      case 'docx':
        return 'word'
      case 'xls':
      case 'xlsx':
        return 'excel'
      default:
        return ''
    }
  }

  getSafeFileUrl(url: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(url)
  }
}
