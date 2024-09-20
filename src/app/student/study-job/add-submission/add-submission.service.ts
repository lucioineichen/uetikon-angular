import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddSubmissionComponent } from './add-submission.component'
import { mergeMap, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class AddSubmissionService {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  addSubmission(id: Number, name: string) {
    const dialogRef = this.dialog.open(AddSubmissionComponent, { data: name })

    return dialogRef.afterClosed().pipe(mergeMap((file) => this.postSubmission(id, file)))
  }

  postSubmission(id: Number, file: File) {
    const formData = new FormData()
    formData.append('file', file)

    return this.http.post(
      `${environment.baseUrl}/task-prgoress/${id}/submissions`,
      formData
    )
  }
}
