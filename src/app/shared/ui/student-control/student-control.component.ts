import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { SelectStudentService } from '../select-student/select-student.service'
import { filterNullish } from '../../utils/filternullish'
import { tap } from 'rxjs'

@Component({
  selector: 'app-student-control [control]',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Wähle Schüler</mat-label>
      <mat-select [formControl]="displayControl" ngDefaultControl>
        <mat-option (click)="unselectStudent()">Alle</mat-option>
        <mat-option *ngIf="control.value" [value]="true">{{
          displayName | titlecase
        }}</mat-option>
        <mat-option (click)="selectStudent()"
          >Wähle Schüler <mat-icon>search</mat-icon></mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class StudentControlComponent {
  @Input() control!: FormControl
  displayControl = new FormControl<true | null>(null)
  displayName?: string

  constructor(private service: SelectStudentService) {}

  unselectStudent() {
    this.control.setValue(null)
    this.displayName = undefined
  }

  selectStudent() {
    this.displayControl.setValue(this.control.value ? true : null)
    this.service
      .selectStudent(this.control.value)
      .pipe(
        filterNullish(),
        tap((ref) => this.control.setValue(ref._id)),
        tap((ref) => (this.displayName = ref.name)),
        tap(() => this.displayControl.setValue(true))
      )
      .subscribe()
  }
}
