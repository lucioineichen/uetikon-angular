import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { environment } from 'src/app/core/environment/environment.demo'
import { IFile, ITask } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-task [task]',
  templateUrl: './task.competence.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: ITask
  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()
  isExpanded = false
  deleteJob() {
    this.delete.emit(true)
  }
  editJob() {
    setTimeout(() => this.edit.emit(true), 0)
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded
  }
  constructor(private domSanitizer: DomSanitizer) {}

  openFile(url: string) {
    window.open(`${environment.baseUrl}${url}`, '_blank')
  }

  isPicture(extension: string) {
    if (extension === 'png') return true
    return false
  }

  getFileIcon(extension: string): string | undefined {
    switch (extension) {
      case 'pdf':
        return '../../../assets/pdf.png'
      case 'doc':
      case 'docx':
        return '../../../assets/word.png'
      case 'xls':
      case 'xlsx':
        return '../../../assets/excel.png'
      default:
        return undefined
    }
  }

  isKnownExtension(ext: string) {
    switch (ext) {
      case 'pdf':
      case 'doc':
      case 'docx':
      case 'xls':
      case 'xlsx':
        return true
      default:
        return false
    }
  }

  // getSafeFileUrl(url: string): SafeUrl {
  //   return this.domSanitizer.bypassSecurityTrustUrl(url)
  // }
}
