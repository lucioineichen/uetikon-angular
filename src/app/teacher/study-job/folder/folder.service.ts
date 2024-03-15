import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IFolder } from 'src/app/shared/utils/interfaces'
import { RenameFolderService } from 'src/app/shared/ui/rename-folder/rename-folder.service'

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  readonly folder$ = new BehaviorSubject<IFolder | undefined>(undefined)
  readonly selectedJobs$ = new BehaviorSubject<number[]>([])
  readonly isOneSelected$ = this.selectedJobs$.pipe(
    map((selected) => selected.length > 0)
  )

  constructor(
    private http: HttpClient,
    private ui: DialogService,
    private renameFolder: RenameFolderService
  ) {}

  private getFolder(id: number): Observable<IFolder> {
    return this.http.get<IFolder>(
      `${environment.baseUrl}/teacher/folders/${id}`
    )
  }

  update(id: number) {
    this.getFolder(id)
      .pipe(
        tap(console.log),
        tap((root) => this.folder$.next(root)),
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

  private postFolder(id: number, data: any) {
    return this.http.post<{}>(
      `${environment.baseUrl}/teacher/folders/${id}/folders`,
      data
    )
  }
}
