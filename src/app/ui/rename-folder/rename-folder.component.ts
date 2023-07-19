import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-rename-folder',
  template: ` <h1 mat-dialog-title>Ordner Benennen</h1>
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
      </form>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Abrechen</button>
      <button
        mat-button
        [disabled]="!nameForm.valid"
        [mat-dialog-close]="nameForm.value.name"
      >
        Speichern
      </button>
    </mat-dialog-actions>`,
})
export class RenameFolderComponent {
  nameForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private name: string = ''
  ) {
    this.nameForm = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.maxLength(50)]],
    })
  }
}
