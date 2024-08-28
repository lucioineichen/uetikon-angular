import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ChooseJobService } from '../choose-job/choose-job.service'
import { tap } from 'rxjs'

@Component({
  selector: 'app-job-control [control]',
  template: ` <mat-form-field appearance="outline">
    <mat-label>LernJob</mat-label>
    <mat-select [formControl]="displayControl" panelClass="testClass">
      <mat-option [value]="0">Alle</mat-option>
      <mat-option [value]="1" (click)="open()">Ausgewählt</mat-option>
    </mat-select>
  </mat-form-field>`,
  styles: [],
})
export class JobControlComponent {
  @Input() control!: FormControl
  displayControl = new FormControl(0)

  constructor(private chooseJob: ChooseJobService) {}

  open() {
    this.chooseJob
      .chooseJob()
      .pipe(
        tap((job) => {
          if (job) this.control.setValue(job)
        })
      )
      .subscribe()
  }
}
