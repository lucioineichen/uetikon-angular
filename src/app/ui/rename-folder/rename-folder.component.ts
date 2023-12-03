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
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-rename-folder',
  template: ` <h1 mat-dialog-title>Ordner Benennen</h1>
    <div mat-dialog-content>
      <form fxLayout="column">
        <mat-form-field fxFlex style="width: 100%">
          <mat-label>Name</mat-label>
          <input
            matInput
            placeholder="Name"
            aria-label="Name"
            [formControl]="nameControl"
          />
          <mat-error *ngIf="nameControl.hasError('required')">
            Name ist obligatorisch
          </mat-error>
          <mat-error *ngIf="nameControl.hasError('maxlength')">
            Name darf nicht länger als 50 sein
          </mat-error>
        </mat-form-field>
      </form>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!nameControl.valid"
        [mat-dialog-close]="nameControl.value"
      >
        Speichern
      </button>
    </mat-dialog-actions>`,
})
export class RenameFolderComponent implements OnInit {
  nameControl!: FormControl

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private oldName: string = ''
  ) {}

  ngOnInit(): void {
    this.nameControl = this.fb.control(this.oldName, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ])
  }
}
