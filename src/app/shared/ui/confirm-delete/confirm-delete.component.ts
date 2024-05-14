import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-confirm-delete',
  template: `
    <h2 mat-dialog-title>{{ data.objectName | titlecase }} Löschen</h2>

    <mat-dialog-content> </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button cdkFocusInitial [mat-dialog-close]="false">
        Abrechen
      </button>
      <button color="warn" mat-button [mat-dialog-close]="true">Löschen</button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class ConfirmDeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: { objectName: string }
  ) {}
}
