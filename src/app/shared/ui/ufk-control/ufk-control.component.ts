import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { SelectUfkService } from '../select-ufk/select-ufk.service'
import { filterNullish } from '../../utils/filternullish'
import { tap } from 'rxjs'

@Component({
  selector: 'app-ufk-control',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Wähle ÜFK</mat-label>
      <mat-select [formControl]="displayControl" ngDefaultControl>
        <mat-option (click)="unselect()">Alle</mat-option>
        <mat-option
          *ngIf="control.value"
          [value]="true"
          [matTooltip]="displayName! | titlecase"
          >{{ (displayName | titlecase | slice : 0 : 18) + '...' }}</mat-option
        >
        <mat-option (click)="select()"
          >Wähle ÜFK <mat-icon>search</mat-icon></mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class UfkControlComponent {
  @Input() control!: FormControl
  displayControl = new FormControl<true | null>(null)
  displayName?: string

  constructor(private service: SelectUfkService) {}

  unselect() {
    this.control.setValue(null)
    this.displayName = undefined
  }

  select() {
    this.displayControl.setValue(this.control.value ? true : null)
    this.service
      .selectUfk(this.control.value)
      .pipe(
        filterNullish(),
        tap((ref) => this.control.setValue(ref._id)),
        tap((ref) => (this.displayName = ref.name)),
        tap(() => this.displayControl.setValue(true))
      )
      .subscribe()
  }
}
