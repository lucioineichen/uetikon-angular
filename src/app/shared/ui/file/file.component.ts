import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { environment } from 'src/app/core/environment/environment.demo'
import { IFile } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-file',
  template: `
    <span class="file-container">
      <span
        class="file"
        [ngClass]="getFileIcon(file.extension)"
        *ngIf="getFileIcon(file.extension); else picture"
      ></span>

      <ng-template #picture>
        <img
          *ngIf="isPicture(file.extension)"
          [src]="environment.baseUrl + '/' + file.url"
          alt="task-picture"
          style="width: 30px; height: 30px; padding-right: 10px"
        />
      </ng-template>

      <a
        [href]="environment.baseUrl + '/' + file.url"
        target="_blank"
        class="file-link"
        >{{ file.name }}</a
      >
    </span>
  `,
  styles: [
    `
      .file-link {
        display: inline-block;
        text-decoration: none;
        color: #0366d6; /* Link color */
        height: 100%;
      }

      /* Hover effect */
      .file-link:hover {
        text-decoration: underline;
      }
    `,
    `
      .file-container {
        display: inline-flex;
        align-items: center;
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
  environment = environment

  constructor(private domSanitizer: DomSanitizer) {}

  isPicture(extension: string) {
    if (extension === 'png') return true
    return false
  }

  getFileIcon(extension: string | undefined): string | undefined {
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
        return undefined
    }
  }

  getSafeFileUrl(url: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(url)
  }
}
