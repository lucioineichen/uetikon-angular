import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'
import { IRef } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-create-share-folder',
  template: `<h1 mat-dialog-title>Ordner Benennen</h1>
    <div mat-dialog-content class="dialog">
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

        <app-choose-teacher [teacher-list]="teacherList$"></app-choose-teacher>
      </form>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="undefined">Abrechen</button>
      <button
        mat-button
        [disabled]="!nameControl.valid"
        [mat-dialog-close]="{
          name: nameControl.value,
          teacherList: teacherList$.value
        }"
      >
        Speichern
      </button>
    </mat-dialog-actions>`,
  styles: [
    `
      .dialog {
        width: 500px;
      }
    `,
  ],
})
export class CreateShareFolderComponent {
  nameControl = new FormControl('')
  teacherList$ = new BehaviorSubject<IRef[]>([])

  constructor(private fb: FormBuilder) {}
}
