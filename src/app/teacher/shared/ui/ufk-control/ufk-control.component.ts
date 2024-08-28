import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { map, tap } from 'rxjs'
import { FormControl } from '@angular/forms'
import { PickCompetenceListService } from 'src/app/shared/ui/pick-competence-list/pick-competence-list.service'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-ufk-control [control]',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Kompetenzen</mat-label>
      <mat-select [formControl]="displayControl" panelClass="testClass">
        <mat-option [value]="0">Alle</mat-option>
        <mat-option [value]="1" (click)="open()">Ausgewählt</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class UfkControlComponent {
  @Input() control!: FormControl
  displayControl = new FormControl(0)

  constructor(private pickCompetence: PickCompetenceListService) {}

  open() {
    this.pickCompetence
      .pickCompetenceList(this.control.value)
      .pipe(
        tap((list) => {
          if (Array.isArray(list) && list?.length > 0) {
            this.control.setValue(list)
            this.displayControl.setValue(1)
          } else {
            this.control.setValue([])
            this.displayControl.setValue(0)
          }
        })
      )
      .subscribe()
  }
}
