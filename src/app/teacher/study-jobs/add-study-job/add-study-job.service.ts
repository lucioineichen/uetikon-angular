import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddStudyJobComponent } from './add-study-job.component'
import { filter, mergeMap, tap, catchError, Observable } from 'rxjs'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/environment/environment.demo'
import { UiService } from 'src/app/common/ui.service'
import { filterNullish } from 'src/app/common/common'
import { ICompetence } from 'src/app/interfaces'

@Injectable({
  providedIn: 'root',
})
export class AddStudyJobService {
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private ui: UiService
  ) {}

  addJob(folderId?: number) {
    const dialogRef = this.dialog.open(AddStudyJobComponent)

    return dialogRef.afterClosed().pipe(
      tap(console.log),
      filterNullish(),
      tap(console.log),
      tap(
        (data) =>
          (data.competences = data.competences.map(
            (comp: ICompetence) => comp._id
          ))
      ),
      mergeMap((data) => {
        return this.postJob(data, folderId)
      }),
      catchError((err) => {
        this.ui.showToast('LernJob konnte nicht erstellt werden')
        return err
      })
    )
  }

  private postJob(data: any, folderId?: number): Observable<{}> {
    let url = `${environment.baseUrl}/teacher/study-jobs`
    url += folderId ? `/folders/${folderId}` : ''
    return this.http.post(url, data)
  }
}
