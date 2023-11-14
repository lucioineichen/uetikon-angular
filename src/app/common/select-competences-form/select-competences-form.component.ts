import { Component } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { SelectCompetencesService } from './select-competences.service'
import { MatDialogRef } from '@angular/material/dialog'
import { ISubject } from 'src/app/competences_data/competences.data'

@Component({
  selector: 'app-select-competences-form',
  templateUrl: './select-competences-form.component.html',
  styleUrls: ['./select-competences-form.component.css'],
})
export class SelectCompetencesFormComponent {
  readonly subjects$ = this.serivce.subjects$
  readonly subjectControl = this.serivce.subjectControl
  readonly searchControl = this.serivce.searchControl
  readonly selectedSubject$ = new BehaviorSubject<undefined | ISubject>(
    undefined
  )

  constructor(
    private serivce: SelectCompetencesService,
    public dialogRef: MatDialogRef<SelectCompetencesFormComponent>
  ) {}

  openSubject(id: string) {
    this.subjectControl.setValue(id)
  }

  ngOnInit(): void {
    this.serivce.updateCompetences()
  }

  close() {
    this.dialogRef.close(this.serivce.getSelectedCompetences())
  }
}
