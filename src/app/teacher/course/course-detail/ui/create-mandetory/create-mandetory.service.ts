import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { CreateMandetoryComponent } from './create-mandetory.component'
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
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'
import { HttpClient } from '@angular/common/http'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { ChooseJobService } from 'src/app/teacher/shared/ui/choose-job/choose-job.service'
import { ChooseDependencyService } from '../../../../shared/ui/choose-dependency/choose-dependency.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Injectable({
  providedIn: 'root',
})
export class CreateMandetoryService {
  readonly job$ = new BehaviorSubject<undefined | IStudyJob>(undefined)
  readonly dependentContainer$ = new BehaviorSubject<undefined | IRef>(
    undefined
  )
  readonly courseId$ = new BehaviorSubject<number | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ui: DialogService,
    private chooseJobService: ChooseJobService,
    private dependendService: ChooseDependencyService
  ) {}

  chooseJob() {
    this.chooseJobService
      .chooseJob()
      .pipe(
        tap((job) => {
          if (job) this.job$.next(job)
        })
      )
      .subscribe()
  }

  chooseDependet(container: IRef | undefined) {
    const job = this.job$.getValue()
    const courseId = this.courseId$.getValue()

    if (!job || !courseId) return

    this.dependendService
      .chooseDependency(courseId, job.name, undefined, container)
      .pipe(
        filter((container) => container != 'noChange'),
        tap((dep) => this.dependentContainer$.next(dep as any))
      )
      .subscribe()
  }

  createMandetory(courseId: number): Observable<any> {
    this.courseId$.next(courseId)
    const dialogRef: MatDialogRef<CreateMandetoryComponent, true | undefined> =
      this.dialog.open(CreateMandetoryComponent)

    return dialogRef.afterClosed().pipe(
      filterNullish(),
      map(() => {
        const course = this.courseId$.getValue()
        const mandetoryJob = this.job$.getValue()?._id
        const dependentContainer = this.dependentContainer$.getValue()?._id
        if (course && mandetoryJob)
          return {
            type: 'mandetory',
            course,
            mandetoryJob,
            dependentContainer,
          }
        return undefined
      }),
      filterNullish(),
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
