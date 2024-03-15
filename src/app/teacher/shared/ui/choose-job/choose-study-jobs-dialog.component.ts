import { Component } from '@angular/core'
import { ChooseJobService } from './choose-job.service'

@Component({
  selector: 'app-choose-study-jobs-dialogg',
  templateUrl: './choose-study-jobs-dialog.component.html',
  styles: [],
})
export class ChooseJobComponent {
  folders$ = this.service.folders$
  jobs$ = this.service.jobs$

  constructor(private service: ChooseJobService) {}
}
