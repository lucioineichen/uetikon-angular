import { Component } from '@angular/core'
import { UiService } from 'src/app/common/ui.service'

@Component({
  selector: 'app-students',
  template: `
    <button mat-raised-button color="primary" (click)="selectCompetences()">
      Kompetenz Auswählen
    </button>
  `,
  styles: [],
})
export class StudentsComponent {
  constructor(private uiService: UiService) {}

  selectCompetences() {
    this.uiService.selectCompetences()
  }
}
