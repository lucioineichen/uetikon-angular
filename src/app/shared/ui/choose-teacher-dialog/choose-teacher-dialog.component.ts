import { Component } from '@angular/core'
import { ChooseTeacherDialogService } from './choose-teacher-dialog.service'

@Component({
  selector: 'app-choose-teacher-dialog',
  template: `<h2 mat-dialog-title>Kompetenzen Auswählen</h2>

    <mat-dialog-content>
      <app-choose-teacher
        [teacher-list]="service.teacherList$"
      ></app-choose-teacher>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="false">Abrechen</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>
        Auswählen
      </button>
    </mat-dialog-actions> `,
  styles: [],
})
export class ChooseTeacherDialogComponent {
  constructor(protected service: ChooseTeacherDialogService) {}
}
