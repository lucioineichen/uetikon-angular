import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import {
  CompetencesDataService,
  IRawSubject,
} from '../../data/competences_data/competences-data.service'
import { MatDialog } from '@angular/material/dialog'
import { SelectSubjectComponent } from './select-subject.component'

@Injectable({
  providedIn: 'root',
})
export class SelectSubjectService {
  constructor(
    private competenceService: CompetencesDataService,
    private dialog: MatDialog
  ) {}
  getSubjectList() {
    return of(this.competenceService.get_subjects())
  }
  selectSubject(subject?: string): Observable<IRawSubject> {
    const dialogRef = this.dialog.open(SelectSubjectComponent, {
      data: subject,
    })

    return dialogRef.afterClosed()
  }
}
