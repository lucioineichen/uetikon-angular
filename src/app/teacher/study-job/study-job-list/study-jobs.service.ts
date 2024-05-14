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

@Injectable({
  providedIn: 'root',
})
export class StudyJobsService {
  readonly root$ = new BehaviorSubject<IFolder | undefined>(undefined)
  readonly selectedJobs$ = new BehaviorSubject<number[]>([])
  readonly isOneSelected$ = this.selectedJobs$.pipe(
    map((selected) => selected.length > 0)
  )

  constructor(
    private http: HttpClient,
    private ui: DialogService,
    private renameFolder: RenameFolderService,
    private router: Router,
    private chooseFolder: ChooseFolderService
  ) {}

  private getRoot(): Observable<IFolder> {
    return this.http.get<IFolder>(`${environment.baseUrl}/folders/root`)
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
          if (!folder) return undefined
          if (folder._id == 0) {
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

  private postFolder(data: any) {
    return this.http.post<{}>(`${environment.baseUrl}/teacher/folders`, data)
  }

  private putJob(jobId: number, folderId: number) {
    return this.http.put(`${environment.baseUrl}/study-job/${jobId}`, {
      folderId,
    })
  }
}
