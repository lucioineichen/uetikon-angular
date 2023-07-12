import { Component, Input, OnInit } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { environment } from 'src/app/environment/environment.demo'
import { IFile } from 'src/app/interfaces'

@Component({
  selector: 'app-task [task]',
  template: `
    <div class="task-card">
      <h3>{{ task.title }}</h3>
      <p *ngIf="task.text">{{ task.text }}</p>
      <div *ngIf="task.file" class="file-container">
        <div class="file" [ngClass]="getFileIcon(task.file.extension)"></div>
        <a [href]="getSafeFileUrl(task.file.url)" target="_blank">{{
          task.file.name
        }}</a>
      </div>
    </div>
  `,
  styles: [
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
        background-image: url('../../../assets/pdf.png');
      }

      .word {
        background-image: url('../../../assets/word.png');
      }

      .excel {
        background-image: url('../../../assets/excel.png');
      }
    `,
  ],
})
export class TaskComponent implements OnInit {
  @Input() task!: { title: string; text?: string; file?: IFile }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Register custom icons
    this.registerFileIcons()
  }

  ngOnInit(): void {
    console.log(this.task)
  }

  registerFileIcons(): void {
    // Register icons and their corresponding URLs
    this.matIconRegistry.addSvgIcon(
      'pdf',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/pdf.png'
      )
    )
    this.matIconRegistry.addSvgIcon(
      'word',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/pdf.png'
      )
    )
    this.matIconRegistry.addSvgIcon(
      'excel',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/pdf.png'
      )
    )
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
    // url = `${environment.baseUrl}/download/${url}`
    return this.domSanitizer.bypassSecurityTrustUrl(url)
  }
}
