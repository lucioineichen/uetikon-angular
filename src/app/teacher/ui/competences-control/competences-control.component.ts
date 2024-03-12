import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ICompetence } from 'src/app/shared/data/competences_data/competences.data'
// import { SelectCompetencesService } from 'src/app/shared/ui/select-competences/select-competences.service'

@Component({
  selector: 'app-competences-control [control]',
  template: `<a mat-button color="primary" (click)="chooseCompetences()"
      ><mat-icon>add</mat-icon> Kompetenzen</a
    >
    <div *ngIf="control.value.length > 0" class="mat-typographie">
      <p>Ausgewählt:</p>
      <mat-chip *ngFor="let comp of control.value" style="margin-right: 5px">
        {{ comp._id }}
      </mat-chip>
    </div> `,
  styleUrls: [],
})
export class CompetencesControlComponent implements OnInit {
  @Input() control!: FormControl
  get comps(): ICompetence[] {
    return this.control.value
  }

  // constructor(private selectComps: SelectCompetencesService) {}

  ngOnInit(): void {
    if (!this.comps) this.control.setValue([])
  }

  chooseCompetences() {
    // this.selectComps
    //   .selectCompetences(this.comps.map((comp) => comp._id))
    //   .pipe(
    //     filterNullish(),
    //     tap((comps) => this.control.setValue(comps))
    //   )
    //   .subscribe()
  }
}
