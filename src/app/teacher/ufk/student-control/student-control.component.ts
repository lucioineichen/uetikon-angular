import { Component, OnInit } from '@angular/core'
import { StudentControlService } from './student-control.service'

@Component({
  selector: 'app-student-control',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Wähle Schüler</mat-label>
      <mat-select [formControl]="service.studentControl">
        <mat-option [value]="0">Alle</mat-option>
        <mat-option
          *ngFor="let class of service.students$ | async"
          [value]="class._id"
          >{{ class.name }}
        </mat-option>
        <mat-option *ngIf="!(service.students$ | async)"
          >Lädt Schüler...</mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class StudentControlComponent implements OnInit {
  constructor(protected service: StudentControlService) {}

  ngOnInit(): void {
    this.service.studentControl.setValue(0)
    this.service.update()
  }
}
