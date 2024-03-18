import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-class-form',
  template: `<mat-dialog-content
      class="mat-typography"
      style="width: 300px; padding: 20px"
    >
      <h2>Klasse Erstellen</h2>
      <form [formGroup]="classForm" fxLayout="column">
        <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="10px">
          <mat-form-field fxFlex>
            <input
              matInput
              placeholder="Name"
              aria-
              label="Name"
              type="text"
              formControlName="name"
            />
            <mat-hint>Name</mat-hint>
            <mat-error *ngIf="classForm.get('name')?.hasError('required')">
              Name is required
            </mat-error>
            <mat-error *ngIf="classForm.get('name')?.hasError('minlength')">
              Name is at least 1 characters long
            </mat-error>
            <mat-error *ngIf="classForm.get('name')?.hasError('maxlength')">
              Name cannot be longer than 50 characters
            </mat-error>
          </mat-form-field>
        </div>

        <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="10px">
          <mat-radio-group formControlName="grade">
            <mat-radio-button [value]="1">Sek 1</mat-radio-button>
            <mat-radio-button [value]="2">sek 2</mat-radio-button>
            <mat-radio-button [value]="3">sek 3</mat-radio-button>
          </mat-radio-group>
        </div>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close cdkFocusInitial>Abrechen</button>
      <button
        mat-button
        [mat-dialog-close]="classForm.value"
        [disabled]="classForm.invalid"
      >
        Speichern
      </button>
    </mat-dialog-actions> `,
  styles: [],
})
export class ClassFormComponent {
  classForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.classForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      grade: ['', Validators.required],
    })
  }
}
