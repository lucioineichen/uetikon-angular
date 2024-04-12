import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { CreateMandetoryComponent } from './create-mandetory.component'
import {
  BehaviorSubject,
  Observable,
  catchError,
  mergeMap,
  of,
  tap,
} from 'rxjs'
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'
import { HttpClient } from '@angular/common/http'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { ChooseJobService } from 'src/app/teacher/shared/ui/choose-job/choose-job.service'
import { ChooseDependencyService } from '../choose-dependency/choose-dependency.service'

@Injectable({
  providedIn: 'root',
})
export class CreateMandetoryService {
  readonly job$ = new BehaviorSubject<undefined | IStudyJob>(undefined)
  readonly dependendJob$ = new BehaviorSubject<undefined | IRef>(undefined)
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

  chooseDepended() {
    const job = this.job$.getValue()
    const courseId = this.courseId$.getValue()

    if (!job || !courseId) return

    this.dependendService
      .chooseDependency(courseId, job)
      .pipe(tap((dep) => this.dependendJob$.next(dep)))
      .subscribe()
  }

  createMandetory(courseId: number): Observable<any> {
    this.courseId$.next(courseId)
    const dialogRef = this.dialog.open(CreateMandetoryComponent)

    return dialogRef.afterClosed().pipe(
      mergeMap((isConfirm) => {
        if (!isConfirm) return of(undefined)
        const postContainer = this.postContainer()
        if (!postContainer) return of(undefined)
        else return postContainer
      }),
      catchError((err) => {
        this.ui.showToast('Container konnte nicht erstellt werden')
        return err
      })
    )
  }

  private postContainer(): Observable<any> | undefined {
    const course = this.courseId$.getValue()
    const mandetoryJob = this.job$.getValue()?._id
    const dependentContainer = this.dependendJob$.getValue()?._id
    if (!course || !mandetoryJob) return
    return this.http.post(`${environment.baseUrl}/containers`, {
      course,
      mandetoryJob,
      dependentContainer,
    })
  }
}
