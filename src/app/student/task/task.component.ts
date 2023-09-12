import { Component } from '@angular/core'
import { IFile } from 'src/app/interfaces'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  file: IFile = {
    extension: 'pdf',
    name: 'Essay_Studienstiftung_eUFi0uq.pdf',
    url: 'http://127.0.0.1:8000/download/Essay_Studienstiftung_eUFi0uq.pdf',
  }
}
