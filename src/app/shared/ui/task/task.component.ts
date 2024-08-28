import { Component, Input, OnInit } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { IFile, ITask } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-task [task]',
  templateUrl: './task.competence.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: ITask
  isExpanded = false
  deleteJob() {}
  editJob() {}
  toggleExpanded() {
    this.isExpanded = !this.isExpanded
  }
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
