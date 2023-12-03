import { Component, Input, OnInit } from '@angular/core'
import { SubjectControlService } from './subject-control.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-subject-control [control] [styleOption]',
  template: `
    <mat-form-field
      [ngClass]="{ select: styleOption === 'select' }"
      [appearance]="styleOption === 'filter' ? 'outline' : 'fill'"
    >
      <mat-label>Fach</mat-label>
      <mat-select [formControl]="control">
        <mat-option [value]="0" *ngIf="styleOption === 'filter'"
          >Alle</mat-option
        >
        <mat-option
          *ngFor="let class of service.subjects$ | async"
          [value]="class._id"
          >{{ class.name }}
        </mat-option>
        <mat-option *ngIf="!(service.subjects$ | async)"
          >Lädt Fächer...</mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [
    `
      .select {
        width: 100%;
      }
    `,
  ],
})
export class SubjectControlComponent implements OnInit {
  @Input() control!: FormControl
  @Input() styleOption!: 'filter' | 'select'

  constructor(protected service: SubjectControlService) {}

  ngOnInit(): void {
    this.service.update()
    if (this.styleOption === 'filter') this.control.setValue(0)
  }
}
