import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-plan-date',
  template: `
    <h1 mat-dialog-title>Datum Wählen</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Datum Wählen</mat-label>
        <input
          required
          matInput
          [matDatepicker]="picker"
          [formControl]="dateControl"
        />
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-error *ngIf="dateControl.hasError('required')">
          Datum ist obligatorisch
        </mat-error>
        <mat-datepicker-toggle
          matIconSuffix
          [for]="picker"
        ></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
      <!-- <form fxLayout="column">
        <mat-form-field fxFlex style="width: 100%">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Name" aria-label="Name" />
          <mat-error *ngIf="dateControl.hasError('required')">
            Name ist obligatorisch
          </mat-error>
        </mat-form-field>
      </form> -->
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!dateControl.valid"
        [mat-dialog-close]="dateControl.value"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class PlanDateComponent {
  dateControl = new FormControl('', Validators.required)
}
