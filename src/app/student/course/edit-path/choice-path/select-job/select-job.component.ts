import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BehaviorSubject, map, startWith, tap } from 'rxjs'
import { IStudyJob } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-select-job',
  template: `
    <h1 mat-dialog-title>Datum Wählen</h1>
    <div mat-dialog-content>
      <form [formGroup]="form">
        <mat-form-field>
          <mat-label>Datum Wählen</mat-label>
          <input
            required
            matInput
            [matDatepicker]="picker"
            formControlName="deadline"
          />
          <mat-hint>MM/DD/YYYY</mat-hint>
          <mat-error *ngIf="form.get('deadline')?.hasError('required')">
            Datum ist obligatorisch
          </mat-error>
          <mat-datepicker-toggle
            matIconSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-chip-listbox formControlName="job">
          <mat-chip-option
            [value]="choice._id"
            *ngFor="let choice of data.choices"
            [matTooltip]="
              choice.credits +
              ' Credits, ' +
              choice.competences.length +
              ' Kompetenzen, ' +
              choice.tasks.length +
              ' Aufgaben'
            "
            >{{ choice.name }}</mat-chip-option
          >
        </mat-chip-listbox>
      </form>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!form.valid"
        [mat-dialog-close]="data$.value"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class SelectJobComponent implements OnInit {
  form!: FormGroup
  data$ = new BehaviorSubject<{ deadline: string; job: number } | undefined>(
    undefined
  )

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    protected data: { choices: IStudyJob[]; deadline?: string; job?: number }
  ) {}

  ngOnInit(): void {
    console.info(this.data)
    this.buildForm()
    this.syncData()
  }

  private syncData() {
    this.form.valueChanges
      .pipe(
        startWith(this.form.value),
        tap(console.info),
        map((data) => {
          if (!data.deadline || !data.job) return undefined
          const year = data.deadline.getFullYear()
          const month = String(data.deadline.getMonth() + 1).padStart(2, '0')
          const day = String(data.deadline.getDate()).padStart(2, '0')
          const formattedDate = `${year}-${month}-${day}`
          return {
            deadline: formattedDate,
            job: data.job,
          }
        }),
        tap((formattedData) => this.data$.next(formattedData))
      )
      .subscribe()
  }

  private buildForm() {
    this.form = this.fb.group({
      job: [this.data.job, Validators.required],
      deadline: [new Date(this.data.deadline || ''), Validators.required],
    })
  }
}
