import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  combineLatest,
  combineLatestAll,
  map,
  mergeMap,
  tap,
  throwError,
} from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { getNewFolderNumber } from 'src/app/shared/utils/folder'
import {
  IFolder,
  IRef,
  IStudyJob,
  ITask,
} from 'src/app/shared/utils/interfaces'
import { RenameFolderService } from 'src/app/shared/ui/rename-folder/rename-folder.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { environment } from 'src/app/core/environment/environment.demo'
import { Router } from '@angular/router'
import { ChooseFolderService } from 'src/app/shared/ui/choose-folder/choose-folder.service'
import { IJobListItem } from '../folder/job-list-item/job-list-item.component'

export interface IShareFolder {
  _id: number
  name: string
  isRead: boolean
  isWrite: boolean
  teacherWriteList: IRef[]
  teacherReadList: IRef[]
}

export interface IRoot {
  shareFolderList: IShareFolder[]
  storeFolderList: IRef[]
  studyJobList: IStudyJob[]
}

@Injectable({
  providedIn: 'root',
})
export class StudyJobsService {
  readonly root$ = new BehaviorSubject<IRoot | undefined>(undefined)
  readonly selectedJobs$ = new BehaviorSubject<number[]>([])
  readonly isOneSelected$ = this.selectedJobs$.pipe(
    map((selected) => selected.length > 0)
  )
  readonly shareFolderList$ = this.root$.pipe(
    map((root) => root?.shareFolderList)
  )
  readonly storeFolderList$ = this.root$.pipe(
    map((root) => root?.storeFolderList)
  )
  readonly jobList$: Observable<IJobListItem[] | undefined> = combineLatest([
    this.root$.pipe(
      map((folder) => {
        const jobList = folder?.studyJobList
        return jobList?.map((job) => {
          const job_: IJobListItem = {
            _id: job._id,
            isSelected: false,
            isOneSelected: false,
            name: job.name,
            subject: job.subject,
            taskListLength: job.tasks.length,
          }
          return job_
        })
      })
    ),
    this.selectedJobs$,
  ]).pipe(
    map(([jobList, selectedJobList]) => {
      jobList?.forEach((job) => {
        job.isOneSelected = selectedJobList.length > 0
        job.isSelected = selectedJobList.findIndex((id) => id == job._id) != -1
      })
      return jobList
    })
  )

  constructor(
    private http: HttpClient,
    private ui: DialogService,
    private renameFolder: RenameFolderService,
    private router: Router,
    private chooseFolder: ChooseFolderService
  ) {}

  toggleSelection(isSelected: boolean, id: number) {
    if (isSelected) {
      this.selectedJobs$.next(this.selectedJobs$.value.concat(id))
    } else {
      this.selectedJobs$.next(
        this.selectedJobs$.value.filter((_id) => _id != id)
      )
    }
  }

  update() {
    this.selectedJobs$.next([])
    this.getRoot()
      .pipe(
        tap((root) => this.root$.next(root)),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          this.root$.error(err)
          return err
        })
      )
      .subscribe()
  }

  move() {
    this.chooseFolder
      .chooseFolder()
      .pipe(
        map((folder) => {
          if (!folder || folder._id == 0) {
            this.selectedJobs$.next([])
            return undefined
          }
          return folder
        }),
        filterNullish(),
        tap((folder) => {
          this.router.navigate(['teacher', 'study-jobs', 'folder', folder._id])
        }),
        mergeMap((folder) => {
          const jobList = this.selectedJobs$.value.map((jobId) =>
            this.putJob(jobId, folder._id)
          )
          return combineLatest(jobList)
        }),
        catchError((err) => {
          this.ui.showToast('Elemente konnten nicht verschoben werden')
          return err
        })
      )
      .subscribe()
  }

  addFolder() {
    this.renameFolder
      .renameFolder()
      .pipe(
        filterNullish(),
        mergeMap((name) => this.postFolder({ name })),
        tap(() => this.update()),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  private getRoot(): Observable<IRoot> {
    return this.http.get<IRoot>(`${environment.baseUrl}/folders/root`)
  }

  private postFolder(data: any) {
    return this.http.post<{}>(`${environment.baseUrl}/teacher/folders`, data)
  }

  private putJob(jobId: number, folderId: number) {
    return this.http.put(`${environment.baseUrl}/study-job/${jobId}`, {
      folderId,
    })
  }
}
