import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'
import { ChooseDependencyService } from 'src/app/teacher/shared/ui/choose-dependency/choose-dependency.service'
import { ChooseJobService } from 'src/app/teacher/shared/ui/choose-job/choose-job.service'
import { CreateChoiceComponent } from './create-choice.component'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CreateChoiceService {
  readonly courseId$ = new BehaviorSubject<number | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ui: DialogService,
    private chooseJobService: ChooseJobService,
    private dependentService: ChooseDependencyService
  ) {}

  addChoice(): Observable<IStudyJob> {
    return this.chooseJobService.chooseJob().pipe(filterNullish())
  }

  chooseDependent(name: string, container: IRef | undefined): Observable<IRef> {
    const courseId = this.courseId$.getValue()

    return of(courseId).pipe(
      filterNullish(),
      mergeMap((courseId) =>
        this.dependentService.chooseDependency(
          courseId,
          name,
          undefined,
          container
        )
      ),
      map((value) => (value == 'noChange' ? undefined : value)),
      filterNullish()
    )
  }

  createChoice(courseId: number): Observable<any> {
    this.courseId$.next(courseId)
    const dialogRef: MatDialogRef<CreateChoiceComponent, any | undefined> =
      this.dialog.open(CreateChoiceComponent)

    return dialogRef.afterClosed().pipe(
      filterNullish(),
      tap((data) => {
        data.type = 'choice'
        data.course = courseId
        data.choiceList = data.choiceList.map((job: IStudyJob) => job._id)
      }),
      mergeMap((data) => this.postContainer(data)),
      catchError((err) => {
        this.ui.showToast('Container konnte nicht erstellt werden')
        return err
      })
    )
  }

  private postContainer(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/containers`, data)
  }
}
