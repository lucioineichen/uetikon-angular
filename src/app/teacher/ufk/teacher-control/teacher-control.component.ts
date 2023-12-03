import { Component, OnInit } from '@angular/core'
import { TeacherControlService } from './teacher-control.service'

@Component({
  selector: 'app-teacher-control',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Lehrer</mat-label>
      <mat-select [formControl]="service.teacherControl">
        <mat-option [value]="0">Alle</mat-option>
        <mat-option
          *ngFor="let class of service.teachers$ | async"
          [value]="class._id"
          >{{ class.name }}
        </mat-option>
        <mat-option *ngIf="!(service.teachers$ | async)"
          >Lädt Lehrer...</mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class TeacherControlComponent implements OnInit {
  constructor(protected service: TeacherControlService) {}

  ngOnInit(): void {
    this.service.update()
    this.service.teacherControl.setValue(0)
  }
}
