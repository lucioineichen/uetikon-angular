import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { SelectCourseService } from '../select-course/select-course.service'
import { filterNullish } from '../../utils/filternullish'
import { tap } from 'rxjs'

@Component({
  selector: 'app-course-control [control]',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Wähle Kurs</mat-label>
      <mat-select [formControl]="displayControl" ngDefaultControl>
        <mat-option (click)="unselect()">Alle</mat-option>
        <mat-option *ngIf="control.value" [value]="true">{{
          displayName
        }}</mat-option>
        <mat-option (click)="select()"
          >Wähle Kurs <mat-icon>search</mat-icon></mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class CourseControlComponent {
  @Input() control!: FormControl
  displayControl = new FormControl()
  displayName?: string

  constructor(private service: SelectCourseService) {}

  unselect() {
    this.control.setValue(null)
    this.displayName = undefined
  }

  select() {
    this.displayControl.setValue(this.control.value ? true : undefined)
    this.service
      .selectCourse(this.control.value)
      .pipe(
        filterNullish(),
        tap((ref) => this.control.setValue(ref._id)),
        tap((ref) => (this.displayName = ref.name)),
        tap(() => this.displayControl.setValue(true))
      )
      .subscribe()
  }
}
