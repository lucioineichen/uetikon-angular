import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { IRef, IStudyJob } from '../../utils/interfaces'
import { HttpClient } from '@angular/common/http'
import { DialogService } from '../dialogs/ui.service'
import { ChooseFolderComponent } from './choose-folder.component'
import { environment } from 'src/app/core/environment/environment.demo'
import {
  IRoot,
  IShareFolder,
} from 'src/app/teacher/study-job/study-job-list/study-jobs.service'
import { IStoreFolder } from 'src/app/teacher/study-job/folder/folder.service'

export interface IAbstractFolder {
  studyJobList: IStudyJob[]
  storeFolderList: IRef[]
  _id?: number
  name?: string
  path?: IRef[]
  shareFolder?: IRef | undefined
  shareFolderList?: IShareFolder[]
  isWrite?: boolean
  isRead?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class ChooseFolderService {
  readonly folder$ = new BehaviorSubject<undefined | IAbstractFolder>(undefined)

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  openRoot() {
    this.getRoot()
      .pipe(
        tap((folder) => {
          this.folder$.next(folder)
        }),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  openShareFolder(folder: IShareFolder) {
    if (!folder.isWrite) return
    this.getShareFolder(folder._id)
      .pipe(
        tap((folder) => {
          this.folder$.next(folder)
        }),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  openFolder(id: number) {
    this.getFolder(id)
      .pipe(
        tap((folder) => {
          this.folder$.next(folder)
        }),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  chooseFolder(): Observable<IAbstractFolder | undefined> {
    this.openRoot()
    const dialogRef = this.dialog.open(ChooseFolderComponent)

    return dialogRef.afterClosed()
  }

  private getFolder(id: number): Observable<IStoreFolder> {
    return this.http.get<IStoreFolder>(
      `${environment.baseUrl}/store-folders/${id}`
    )
  }

  private getRoot() {
    return this.http.get<IRoot>(`${environment.baseUrl}/folders/root`)
  }

  private getShareFolder(id: number) {
    return this.http.get<IShareFolder>(
      `${environment.baseUrl}/share-folders/${id}`
    )
  }
}
