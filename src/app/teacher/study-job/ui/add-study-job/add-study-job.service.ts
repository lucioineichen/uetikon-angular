import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddStudyJobComponent } from './add-study-job.component'
import { filter, mergeMap, tap, catchError, Observable } from 'rxjs'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ICompetence } from 'src/app/shared/utils/interfaces'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class AddStudyJobService {
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  addJob(
    toRoot: boolean,
    shareFolderId: number | undefined,
    storeFolderId: number | undefined
  ) {
    throw Error('depreciated')
    const dialogRef = this.dialog.open(AddStudyJobComponent)

    return dialogRef.afterClosed().pipe(
      filterNullish(),
      tap(
        (data) =>
          (data.competences = data.competences.map(
            (comp: ICompetence) => comp._id
          ))
      ),
      mergeMap((data) => {
        data = data.saveAt = {
          toRoot,
          shareFolderId,
          storeFolderId,
        }
        return this.postJob(data)
      })
    )
  }

  private postJob(jobInfo: {}): Observable<{}> {
    return this.http.post(`${environment.baseUrl}/study-jobs`, jobInfo)
  }
}
