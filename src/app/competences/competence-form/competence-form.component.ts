import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subjects } from 'src/app/enums'

@Component({
  selector: 'app-competence-form',
  template: `
    <h1 mat-dialog-title>Kompetenz Hinzufügen</h1>
    <div mat-dialog-content>
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

        <div style="display: inline-block; width: 40%">
          <div style="padding-left: 15px">
            <mat-form-field fxFlex style="width: 100%">
              <mat-label>Fach</mat-label>
              <mat-select formControlName="subject">
                <mat-option
                  *ngFor="let subject of subjects"
                  [value]="subject.value"
                >
                  {{ subject.name }}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
      </form>
    </div>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Abrechen</button>
      <button
        mat-button
        [disabled]="!nameForm.valid"
        [mat-dialog-close]="{
          name: nameForm.value.name,
          subject: nameForm.value.subject
        }"
      >
        Hinzufügen
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class CompetenceFormComponent {
  nameForm: FormGroup
  subjects: { name: string; value: number }[] = []

  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      subject: [undefined, [Validators.required]],
    })

    for (const [key, value] of Object.entries(Subjects)) {
      if (!Number.isNaN(+key)) {
        this.subjects.push({
          name: value as string,
          value: +key,
        })
      }
    }
  }
}
