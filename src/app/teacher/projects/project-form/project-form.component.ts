import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ICompetence, ICourse, IStudyJob } from 'src/app/interfaces'
import { filter, tap } from 'rxjs'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SelectCourseService } from '../select-course/select-course.service'

@Component({
  selector: 'app-project-form',
  template: `
    <mat-dialog-content
      class="mat-typography"
      style="width: 500px; max-height: 80vh"
    >
      <h1>Projekt Erstellen</h1>

      <form [formGroup]="nameForm" fxLayout="column">
        <mat-form-field fxFlex style="width: 100%">
          <mat-label>Name</mat-label>
          <input
            matInput
            placeholder="Name"
            aria-label="Name"
            formControlName="name"
          />
          <mat-error *ngIf="nameForm.get('name')?.hasError('required')">
            Name ist obligatorisch
          </mat-error>
          <mat-error *ngIf="nameForm.get('name')?.hasError('maxlength')">
            Name darf nicht länger als 50 sein
          </mat-error>
        </mat-form-field>
      </form>

      <h2 style="padding-top: 30px">Kurse und LernJobs</h2>
      <div *ngFor="let jobCourse of jobCourses">
        {{ jobCourse.course.name }} | {{ jobCourse.job.name }}
        <mat-icon>trash</mat-icon>
      </div>
      <div *ngIf="jobCourses.length === 0">Keine Kurse ausgewählt</div>
      <button color="primary" mat-button (click)="addCourse()">
        Kurs Hinzufügen
      </button>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Abrechen</button>
      <button
        [disabled]="!nameForm.valid"
        mat-button
        [mat-dialog-close]="pathData()"
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class ProjectFormComponent {
  jobCourses: {
    course: ICourse
    job: IStudyJob
  }[]
  nameForm: FormGroup

  constructor(
    private selectCourseService: SelectCourseService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    private data?: {
      course: ICourse
      job: IStudyJob
    }[]
  ) {
    this.jobCourses = data || []
    this.nameForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
    })
  }

  addCourse() {
    this.selectCourseService
      .selectCourseWithJob()
      .pipe(
        filter((data) => data != ''),
        tap((jobCourse) =>
          this.jobCourses.push(jobCourse as { course: ICourse; job: IStudyJob })
        )
      )
      .subscribe()
  }

  pathData() {
    return {
      name: this.nameForm.value.name,
      jobCourses: this.jobCourses,
    }
  }
}
