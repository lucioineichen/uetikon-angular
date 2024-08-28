import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IRef } from 'src/app/shared/utils/interfaces'
import { CourseControlService } from './course-control.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-course-control',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Kurs</mat-label>
      <mat-select [formControl]="control">
        <mat-option [value]="''">Alle</mat-option>
        <mat-option
          *ngFor="let class of courseList$ | async"
          [value]="class._id"
          >{{ class.name }}
        </mat-option>
        <mat-option *ngIf="!(courseList$ | async)">Lädt Klassen...</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class CourseControlComponent {
  @Input() control!: FormControl<number>
  courseList$ = new BehaviorSubject<IRef[] | undefined>(undefined)

  constructor(
    protected service: CourseControlService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.update()
  }

  update() {
    this.service
      .getCourseList()
      .pipe(
        tap((list) => {
          this.courseList$.next(list)
        }),
        catchError((err) => {
          this.ui.showToast('Kurse konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
