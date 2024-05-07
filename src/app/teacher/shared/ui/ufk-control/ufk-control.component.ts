import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { map, tap } from 'rxjs'
import { UfkControlService } from './ufk-control.service'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-ufk-control',
  template: `
    <mat-form-field appearance="outline" (click)="open()">
      <mat-label>UFK</mat-label>
      <mat-select
        #mySelect
        [formControl]="service.ufkControl"
        panelClass="testClass"
      >
        <mat-option [value]="0">Alle</mat-option>
        <mat-option [value]="1">Ausgewählt</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class UfkControlComponent {
  @ViewChild('mySelect') mySelect: any

  constructor(protected service: UfkControlService) {}

  open() {
    throw Error('deleted functionality')
  }
}
