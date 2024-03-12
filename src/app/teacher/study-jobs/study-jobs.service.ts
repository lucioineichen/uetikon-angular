import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  map,
  mergeMap,
  tap,
  throwError,
} from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { getNewFolderNumber } from 'src/app/folder'
import { IFolder, IRef, IStudyJob, ITask } from 'src/app/interfaces'
import { FolderService } from './folder/folder.service'
import { RenameFolderService } from 'src/app/shared/ui/rename-folder/rename-folder.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { environment } from 'src/app/core/environment/environment.demo'

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
    private renameFolder: RenameFolderService
  ) {}

  private getRoot(): Observable<IFolder> {
    return this.http.get<IFolder>(
      `${environment.baseUrl}/teacher/study-jobs/root`
    )
  }

  update() {
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
}
