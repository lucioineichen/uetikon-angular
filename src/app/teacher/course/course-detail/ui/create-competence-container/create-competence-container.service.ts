import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { IRef } from 'src/app/shared/utils/interfaces'
import { ChooseDependencyService } from 'src/app/teacher/shared/ui/choose-dependency/choose-dependency.service'
import { CreateCompetenceContainerComponent } from './create-competence-container.component'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CreateCompetenceContainerService {
  readonly courseId$ = new BehaviorSubject<number | undefined>(undefined)

  constructor(
    private dependentService: ChooseDependencyService,
    private dialog: MatDialog,
    private ui: DialogService,
    private http: HttpClient
  ) {}

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

  createCompetence(courseId: number): Observable<any> {
    this.courseId$.next(courseId)
    const dialogRef: MatDialogRef<CreateCompetenceContainerComponent, any> =
      this.dialog.open(CreateCompetenceContainerComponent)

    return dialogRef.afterClosed().pipe(
      filterNullish(),
      tap((data) => {
        data.type = 'competence'
        data.course = courseId
        data.competenceList = data.competenceList.map((comp: IRef) => comp._id)
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
