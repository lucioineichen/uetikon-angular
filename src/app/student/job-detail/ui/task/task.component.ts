import { Component } from '@angular/core'
import { IFile } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [],
})
export class TaskComponent {
  file: IFile = {
    extension: 'pdf',
    name: 'Essay_Studienstiftung_eUFi0uq.pdf',
    url: 'http://127.0.0.1:8000/download/Essay_Studienstiftung_eUFi0uq.pdf',
  }
}
