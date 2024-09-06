import { Injectable } from '@angular/core'
import { CompetencesDataService } from '../../data/competences_data/competences-data.service'
import { Observable, of } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
import { SelectUfkComponent } from './select-ufk.component'

@Injectable({
  providedIn: 'root',
})
export class SelectUfkService {
  constructor(
    private competenceData: CompetencesDataService,
    private dialog: MatDialog
  ) {}

  getSubject() {
    return of(this.competenceData.get_uk())
  }

  selectUfk(ufk?: string): Observable<{ _id: string; name: string }> {
    const dialogRef = this.dialog.open(SelectUfkComponent, { data: ufk })

    return dialogRef.afterClosed()
  }
}
