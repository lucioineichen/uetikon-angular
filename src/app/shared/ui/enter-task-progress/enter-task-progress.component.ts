import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ITaskProgress } from '../../utils/interfaces'
import { combineLatest, map, Observable, tap } from 'rxjs'

@Component({
  selector: 'app-enter-task-progress',
  template: `
    <h1 mat-dialog-title>{{ taskProg.task.title | titlecase }}</h1>

    <div mat-dialog-content>
      <form fxLayout="column">
        <mat-form-field fxFlex style="width: 100%" *ngIf="taskProg.task.graded">
          <mat-label>Note</mat-label>
          <input
            matInput
            placeholder="Note"
            aria-label="Note"
            [formControl]="gradeControl"
            [disabled]="!completedControl.value"
            type="percent"
          />
          <mat-error *ngIf="gradeControl.hasError('required')">
            Note ist obligatorisch
          </mat-error>
        </mat-form-field>

        <mat-radio-group
          aria-label="Select an option"
          [formControl]="completedControl"
        >
          <mat-radio-button [value]="true">Erfüllt</mat-radio-button>
          <mat-radio-button [value]="false">Nicht Erfüllt</mat-radio-button>
        </mat-radio-group>
      </form>
    </div>

    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="
          !gradeControl.valid && taskProg.task.graded && completedControl.value
        "
        [mat-dialog-close]="value"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class EnterTaskProgressComponent implements OnInit {
  gradeControl!: FormControl
  completedControl!: FormControl
  constructor(@Inject(MAT_DIALOG_DATA) protected taskProg: ITaskProgress) {}

  ngOnInit(): void {
    this.gradeControl = new FormControl(
      this.taskProg.grade,
      Validators.required
    )
    this.completedControl = new FormControl(
      this.taskProg.completed,
      Validators.required
    )

    this.completedControl.valueChanges
      .pipe(
        tap((isCompleted) =>
          isCompleted ? this.gradeControl.enable() : this.gradeControl.disable()
        )
      )
      .subscribe()
  }

  get value() {
    return this.taskProg.task.graded
      ? {
          grade: this.gradeControl.value,
          completed: this.completedControl.value,
        }
      : { completed: this.completedControl.value }
  }
}
