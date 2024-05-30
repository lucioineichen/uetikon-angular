import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IRef, IStudyJob } from 'src/app/shared/utils/interfaces'
import { RenameFolderService } from 'src/app/shared/ui/rename-folder/rename-folder.service'
import { ChooseFolderService } from 'src/app/shared/ui/choose-folder/choose-folder.service'
import { Router } from '@angular/router'
import { IJobListItem } from '../ui/job-list-item/job-list-item.component'
import { ISaveAt } from '../job/job.service'

export interface IStoreFolder {
  _id: number
  name: string
  storeFolderList: IRef[]
  studyJobList: IStudyJob[]
  path: IRef[]
  shareFolder?: IRef
}

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  readonly storeFolder$ = new BehaviorSubject<IStoreFolder | undefined>(
    undefined
  )
  readonly selectedJobs$ = new BehaviorSubject<number[]>([])
  readonly isOneSelected$ = this.selectedJobs$.pipe(
    map((jobList) => jobList.length > 0)
  )
  readonly folderList$ = this.storeFolder$.pipe(
    map((folder) => folder?.storeFolderList)
  )
  readonly jobList$: Observable<IJobListItem[] | undefined> = combineLatest([
    this.storeFolder$.pipe(
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
    private chooseFolder: ChooseFolderService,
    private router: Router
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

  update(id: number) {
    this.selectedJobs$.next([])
    this.getFolder(id)
      .pipe(
        tap((folder) => this.storeFolder$.next(folder)),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          this.storeFolder$.error(err)
          return err
        })
      )
      .subscribe()
  }

  addFolder(id: number) {
    this.renameFolder
      .renameFolder()
      .pipe(
        filterNullish(),
        mergeMap((name) =>
          this.postFolder(name, {
            toRoot: false,
            shareFolderId: null,
            storeFolderId: id,
          })
        ),
        tap(() => this.update(id)),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  move() {
    // const currentFolder = this.storeFolder$.value
    // if (!currentFolder) return
    // this.chooseFolder
    //   .chooseFolder()
    //   .pipe(
    //     map((folder) => {
    //       if (!folder || folder._id == currentFolder._id) {
    //         this.selectedJobs$.next([])
    //         return undefined
    //       }
    //       return folder
    //     }),
    //     filterNullish(),
    //     tap((folder) => {
    //       if (folder._id == 0) this.router.navigate(['teacher', 'study-jobs'])
    //       else
    //         this.router.navigate([
    //           'teacher',
    //           'study-jobs',
    //           'folder',
    //           folder._id,
    //         ])
    //     }),
    //     mergeMap((folder) => {
    //       const selectedJobList = this.selectedJobs$.value
    //       if (selectedJobList.length > 0) {
    //         const jobList = selectedJobList.map((jobId) =>
    //           this.putJob(jobId, folder._id)
    //         )
    //         return combineLatest(jobList)
    //       }
    //       return this.putFolder(
    //         this.storeFolder$.value?._id as number,
    //         folder._id
    //       )
    //     }),
    //     catchError((err) => {
    //       this.ui.showToast('Elemente konnten nicht verschoben werden')
    //       return err
    //     })
    //   )
    //   .subscribe()
  }

  private getFolder(id: number): Observable<IStoreFolder> {
    return this.http.get<IStoreFolder>(
      `${environment.baseUrl}/store-folders/${id}`
    )
  }

  private postFolder(
    name: string,
    saveAt: {
      toRoot: boolean
      shareFolderId: number | null
      storeFolderId: number | null
    }
  ) {
    return this.http.post(`${environment.baseUrl}/store-folders`, {
      name,
      saveAt,
    })
  }

  private putJob(jobId: number, folderId: number) {
    return this.http.put(`${environment.baseUrl}/study-job/${jobId}`, {
      folderId,
    })
  }

  putFolder(id: number, putData: { name?: string; saveAt?: ISaveAt }) {
    return this.http.put(`${environment.baseUrl}/store-folder/${id}`, putData)
  }
}
