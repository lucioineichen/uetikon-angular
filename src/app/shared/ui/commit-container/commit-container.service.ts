import { Injectable } from '@angular/core'
import { catchError, Observable } from 'rxjs'
import { IContainer } from '../../utils/interfaces'
import { environment } from 'src/app/core/environment/environment.demo'
import { HttpClient } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog'
import { CommitContainerComponent } from './commit-container.component'
import { DialogService } from '../dialogs/ui.service'

@Injectable({
  providedIn: 'root',
})
export class CommitContainerService {
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private ui: DialogService
  ) {}

  commit(
    studentId: number,
    containerId: number,
    courseId: number,
    studyJobList: number[],
    studyJobId?: number
  ) {
    return this.http
      .post(`${environment.baseUrl}/container-selection`, {
        studentId,
        containerId,
        courseId,
        studyJobList,
        studyJobId,
      })
      .pipe(
        catchError((err) => {
          this.ui.showToast('Container konnte nicht Angenommen werden')
          return err
        })
      )
  }

  commitContainer(
    containerId: number,
    studentId: number,
    courseId: number
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(CommitContainerComponent, {
      data: {
        containerId,
        studentId,
        courseId,
      },
    })

    return dialogRef.afterClosed()
  }

  getContainer(id: number): Observable<IContainer> {
    return this.http.get<IContainer>(`${environment.baseUrl}/container/${id}`)
  }
}
