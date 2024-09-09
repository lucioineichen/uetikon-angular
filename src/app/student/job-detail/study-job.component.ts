import { Location } from '@angular/common'
import { Component } from '@angular/core'
import { IFile } from 'src/app/shared/utils/interfaces'
import { JobService } from './job.service'

@Component({
  selector: 'app-study-job',
  templateUrl: './study-job.component.html',
  styleUrls: ['./study-job.component.css'],
})
export class JobDetialComponent {
  constructor(private service: JobService, private location: Location) {}

  goBack() {
    this.location.back()
  }
}
