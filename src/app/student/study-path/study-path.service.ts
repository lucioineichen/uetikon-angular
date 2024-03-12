import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IStudyPath } from 'src/app/teacher/study-path/study-path.service'

@Injectable({
  providedIn: 'root',
})
export class StudyPathService {
  readonly path$ = new BehaviorSubject<IStudyPath | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private uiService: DialogService
  ) {}

  private getPath(courseId: number): Observable<IStudyPath> {
    return this.httpClient.get<IStudyPath>(
      `${environment.baseUrl}/teacher/course/${courseId}/path`
    )
  }

  private putPath(data: any, courseId: number): Observable<IStudyPath> {
    console.log('body: ', data)
    return this.httpClient.put<IStudyPath>(
      `${environment.baseUrl}/teacher/course/${courseId}/path`,
      data
    )
  }

  updatePath(courseId: number) {
    this.getPath(courseId)
      .pipe(
        tap((path) => this.path$.next(path)),
        catchError((err) => {
          this.uiService.showToast('LernWeg konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
