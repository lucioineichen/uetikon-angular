import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  template: `
    <h1 mat-dialog-title>{{ title }}</h1>
    <div mat-dialog-content>{{ text }}</div>
    <div mat-dialog-actions>
      <span class="flex-spacer"></span>
      <button mat-button [mat-dialog-close]="false">Abbrechen</button>
      <button mat-button color="warn" [mat-dialog-close]="true" cdkFocusInitial>
        Löschen
      </button>
    </div>
  `,
})
export class ConfirmDeletionDialogComponent {
  title = `${this.data.type} Löschen`
  text = `Möchtest Du ${this.data.name} löschen?`

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeletionDialogComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
}
