import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BehaviorSubject, map, tap } from 'rxjs'
import { SelectJobService } from '../../choice-path/select-job/select-job.service'
import { ChooseJobService } from 'src/app/teacher/shared/ui/choose-job/choose-job.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Component({
  selector: 'app-add-competence-path',
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

        <div>
          <span *ngIf="!form.get('job')?.value">Kein Job Ausgesucht*</span>
          <span *ngIf="form.get('job')?.value">{{ jobName }}</span>
          <button mat-icon-button (click)="selectJob()">
            <mat-icon>search</mat-icon>
          </button>
        </div>
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
export class AddCompetencePathComponent {
  form!: FormGroup
  data$ = new BehaviorSubject<{ deadline: string; job: number } | undefined>(
    undefined
  )
  jobName?: string

  constructor(
    private fb: FormBuilder,
    private selectJobService: ChooseJobService
  ) {}

  ngOnInit(): void {
    this.buildForm()
    this.syncData()
  }

  selectJob() {
    this.selectJobService
      .chooseJob()
      .pipe(
        filterNullish(),
        tap((job) => {
          this.form.get('job')?.setValue(job._id)
          this.jobName = job.name
        })
      )
      .subscribe()
  }

  private syncData() {
    this.form.valueChanges
      .pipe(
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
      job: [null, Validators.required],
      deadline: [null, Validators.required],
    })
  }
}
