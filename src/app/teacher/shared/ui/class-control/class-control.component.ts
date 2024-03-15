import { Component, OnInit } from '@angular/core'
import { ClassControlService } from './class-control.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-class-control',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Klasse</mat-label>
      <mat-select [formControl]="service.classControl">
        <mat-option
          *ngFor="let class of service.classes$ | async"
          [value]="class._id"
          >{{ class.name }}
        </mat-option>
        <mat-option *ngIf="!(service.classes$ | async)"
          >Lädt Klassen...</mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class ClassControlComponent implements OnInit {
  test = new FormControl()

  constructor(protected service: ClassControlService) {}

  ngOnInit(): void {
    this.service.update()
  }
}
