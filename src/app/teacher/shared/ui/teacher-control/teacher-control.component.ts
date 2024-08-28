import { Component, Input, OnInit } from '@angular/core'
import { TeacherControlService } from './teacher-control.service'
import { FormControl } from '@angular/forms'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { BehaviorSubject, catchError, tap } from 'rxjs'

@Component({
  selector: 'app-teacher-control [control]',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Lehrer</mat-label>
      <mat-select [formControl]="control">
        <mat-option [value]="0">Alle</mat-option>
        <mat-option *ngFor="let class of teachers$ | async" [value]="class._id"
          >{{ class.name | titlecase }}
        </mat-option>
        <mat-option *ngIf="!(teachers$ | async)">Lädt Lehrer...</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class TeacherControlComponent implements OnInit {
  @Input() control!: FormControl<number>
  teachers$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )

  constructor(
    protected service: TeacherControlService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.update()
    this.control.setValue(0)
  }

  private update() {
    this.service
      .getTeachers()
      .pipe(
        tap((teachers) => this.teachers$.next(teachers)),
        catchError((err) => {
          this.ui.showToast('Lehrer konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
