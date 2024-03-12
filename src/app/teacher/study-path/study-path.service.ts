import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ICompetence, IStudyJob } from 'src/app/interfaces'
import { StudyPathFormComponent } from './study-path-form/study-path-form.component'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  mergeMap,
  tap,
} from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'

export interface IStudyPath {
  competences: ICompetence[]
  jobs: IStudyJob[]
}

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

  openForm(studyPath?: IStudyPath): Observable<IStudyPath | null> {
    const dialogRef = this.dialog.open(StudyPathFormComponent, {
      data: studyPath,
    })

    return dialogRef.afterClosed()
  }

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

  editPath(courseId: number) {
    const dialogRef = this.dialog.open(StudyPathFormComponent, {
      data: {
        jobs: this.path$.value?.jobs,
        competences: this.path$.value?.competences,
      },
    })

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data),
        tap(console.info),
        mergeMap((data) => this.putPath(data, courseId))
      )
      .subscribe()
  }
}
