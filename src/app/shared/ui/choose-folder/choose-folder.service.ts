import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { IFolder, IStudyJob } from '../../utils/interfaces'
import { HttpClient } from '@angular/common/http'
import { DialogService } from '../dialogs/ui.service'
import { ChooseFolderComponent } from './choose-folder.component'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ChooseFolderService {
  readonly folder$ = new BehaviorSubject<undefined | IFolder>(undefined)

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  update() {}

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

  chooseFolder(): Observable<IFolder | undefined> {
    this.openFolder(0)
    const dialogRef = this.dialog.open(ChooseFolderComponent)

    return dialogRef.afterClosed()
  }

  private getFolder(id?: number): Observable<IFolder> {
    if (id && id != 0)
      return this.http.get<IFolder>(`${environment.baseUrl}/folders/${id}`)

    return this.http.get<IFolder>(`${environment.baseUrl}/folders/root`)
  }
}
