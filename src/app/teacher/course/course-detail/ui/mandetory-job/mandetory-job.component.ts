import { Component, Input } from '@angular/core'
import { IStudyJob } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-mandetory-job [job]',
  templateUrl: './mandetory-job.component.html',
  styleUrls: ['./mandetory-job.component.css'],
})
export class MandetoryJobComponent {
  @Input('job') job!: IStudyJob
}
