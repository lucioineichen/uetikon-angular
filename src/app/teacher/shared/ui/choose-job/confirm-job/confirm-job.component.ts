import { Component } from '@angular/core';
import { ChooseJobService } from '../choose-job.service';

@Component({
  selector: 'app-confirm-job',
  templateUrl: './confirm-job.component.html',
  styleUrls: ['./confirm-job.component.css']
})
export class ConfirmJobComponent {
  readonly job$ = this.service.job$

  constructor(private service: ChooseJobService) {}
}
