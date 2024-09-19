import { Component, Inject, OnInit } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ITaskProgress } from '../../utils/interfaces'
import { combineLatest, map, Observable, startWith, tap } from 'rxjs'

const taskProgressValidator: (isGraded: boolean) => ValidatorFn =
  (isGraded: boolean) => (group: AbstractControl) => {
    if (!isGraded) return null
    if (group.get('status')?.value != 2) return null
    if (group.get('grade')?.value) return null
    return { noGrade: true }
  }

@Component({
  selector: 'app-enter-task-progress',
  template: `
    <h1 mat-dialog-title>{{ taskProg.task.title | titlecase }}</h1>

    <div mat-dialog-content>
      <form fxLayout="column" [formGroup]="form">
        <mat-form-field fxFlex style="width: 100%" *ngIf="taskProg.task.graded">
          <mat-label>Note</mat-label>
          <input
            matInput
            placeholder="Note"
            aria-label="Note"
            formControlName="grade"
            type="percent"
          />
        </mat-form-field>

        <mat-radio-group aria-label="Select an option" formControlName="status">
          <mat-radio-button [value]="0">Nicht Begonnen</mat-radio-button>
          <mat-radio-button [value]="1">Am Bearbeiten</mat-radio-button>
          <mat-radio-button [value]="2">Fertig</mat-radio-button>
        </mat-radio-group>
      </form>
    </div>

    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="this.form.status != 'VALID'"
        [mat-dialog-close]="form.value"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class EnterTaskProgressComponent implements OnInit {
  form!: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) protected taskProg: ITaskProgress,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm()
  }

  private buildForm() {
    this.form = this.fb.group(
      {
        grade: [this.taskProg.grade],
        status: [this.taskProg.status, Validators.required],
      },
      {
        validators: [taskProgressValidator(this.taskProg.task.graded)],
      }
    )

    const gradeCtr = this.form.get('grade')
    const statusCtr = this.form.get('status')
    statusCtr?.valueChanges
      .pipe(
        startWith(statusCtr.value),
        tap((status) => {
          if (status == 2) gradeCtr?.enable()
          else gradeCtr?.disable()
        })
      )
      .subscribe()
  }
}
