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
import { IFolder } from 'src/app/shared/utils/interfaces'
import { RenameFolderService } from 'src/app/shared/ui/rename-folder/rename-folder.service'
import { ChooseFolderService } from 'src/app/shared/ui/choose-folder/choose-folder.service'
import { Router } from '@angular/router'
import { IJobListItem } from './job-list-item/job-list-item.component'

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  readonly folder$ = new BehaviorSubject<IFolder | undefined>(undefined)
  readonly selectedJobs$ = new BehaviorSubject<number[]>([])
  readonly isOneSelected$ = this.selectedJobs$.pipe(
    map((jobList) => jobList.length > 0)
  )
  readonly folderList$ = this.folder$.pipe(map((folder) => folder?.folders))
  readonly jobList$: Observable<IJobListItem[] | undefined> = combineLatest([
    this.folder$.pipe(
      map((folder) => {
        const jobList = folder?.studyJobs
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
        tap((folder) => this.folder$.next(folder)),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          this.folder$.error(err)
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
        mergeMap((name) => this.postFolder(id, { name })),
        tap(() => this.update(id)),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  move() {
    const currentFolder = this.folder$.value
    if (!currentFolder) return
    this.chooseFolder
      .chooseFolder()
      .pipe(
        map((folder) => {
          if (!folder) return undefined
          if (folder._id == currentFolder._id) {
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
        })
      )
      .subscribe()
  }

  private getFolder(id: number): Observable<IFolder> {
    return this.http.get<IFolder>(`${environment.baseUrl}/folders/${id}`)
  }

  private postFolder(id: number, data: any) {
    return this.http.post<{}>(
      `${environment.baseUrl}/teacher/folders/${id}/folders`,
      data
    )
  }

  private putJob(jobId: number, folderId: number) {
    return this.http.put(`${environment.baseUrl}/study-job/${jobId}`, {
      folderId,
    })
  }
}
