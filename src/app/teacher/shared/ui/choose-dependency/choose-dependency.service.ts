import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { IContainer, IRef, IStudyJob } from 'src/app/shared/utils/interfaces'
import { ChooseDependencyComponent } from './choose-dependency.component'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Injectable({
  providedIn: 'root',
})
export class ChooseDependencyService {
  readonly forName$ = new BehaviorSubject<string | undefined>(undefined)
  readonly containerList$ = new BehaviorSubject<IRef[] | undefined>(undefined)

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  chooseDependency(
    courseId: number,
    forName: string,
    forContainer: IRef | undefined = undefined,
    selectedContainer: IRef | undefined = undefined
  ): Observable<IRef | undefined | 'noChange'> {
    this.forName$.next(forName)
    this.updateContainerList(courseId, forContainer)
    const dialogRef = this.dialog.open(ChooseDependencyComponent, {
      data: selectedContainer,
    })

    return dialogRef.afterClosed()
  }

  updateContainerList(id: number, forContainer: IRef | undefined = undefined) {
    this.getContainerList(id, forContainer)
      .pipe(
        tap((list) => this.containerList$.next(list)),
        catchError((err) => {
          this.ui.showToast('LernElemente konnten nicht geladen werden')
          this.containerList$.error(new Error('server 500'))
          return err
        })
      )
      .subscribe()
  }

  getContainerList(
    id: number,
    forContainer: IRef | undefined = undefined
  ): Observable<IRef[]> {
    let params = new HttpParams().set('course', id)
    params = params.set('format', 'ref')
    if (forContainer) params = params.set('forContainer', forContainer._id)

    return this.http.get<IRef[]>(`${environment.baseUrl}/containers`, {
      params: params,
    })
  }
}
