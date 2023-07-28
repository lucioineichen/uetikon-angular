import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { IStudyJob, IStudyJobExpectation } from 'src/app/interfaces'
import { StudyPathFormComponent } from './study-path-form/study-path-form.component'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/environment/environment.demo'
import { UiService } from 'src/app/common/ui.service'

@Injectable({
  providedIn: 'root',
})
export class StudyPathService {
  path$ = new BehaviorSubject<IStudyJobExpectation[] | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private uiService: UiService
  ) {}

  openForm(
    studyPath?: IStudyJobExpectation[]
  ): Observable<IStudyJobExpectation[] | null> {
    const dialogRef = this.dialog.open(StudyPathFormComponent, {
      data: studyPath,
    })

    return dialogRef.afterClosed()
  }

  private getPath(courseId: number): Observable<IStudyJobExpectation[]> {
    return this.httpClient.get<IStudyJobExpectation[]>(
      `${environment.baseUrl}/teacher/course/${courseId}/path`
    )
  }

  updatePath(courseId: number) {
    this.getPath(courseId)
      .pipe(
        tap((path) => this.path$.next(path)),
        catchError((err) => {
          this.uiService.showToast('Lern Pfad konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
