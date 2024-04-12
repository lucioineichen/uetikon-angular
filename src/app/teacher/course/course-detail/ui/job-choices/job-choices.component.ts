import { Component, Input } from '@angular/core'
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-job-choices [choices] [name]',
  templateUrl: './job-choices.component.html',
  styleUrls: ['./job-choices.component.css'],
})
export class JobChoicesComponent {
  @Input('choices') choices!: IStudyJob[]
  @Input('name') name?: string
}
