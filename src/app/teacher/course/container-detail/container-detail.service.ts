import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  mergeMap,
  tap,
} from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { IContainer, IRef } from 'src/app/shared/utils/interfaces'
import { ChooseDependencyService } from '../../shared/ui/choose-dependency/choose-dependency.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class ContainerDetailService {
  readonly courseId$ = new BehaviorSubject<number | undefined>(undefined)
  readonly containerId$ = new BehaviorSubject<number | undefined>(undefined)
  readonly containerName$ = new BehaviorSubject<string | undefined>(undefined)
  readonly container$ = new BehaviorSubject<IContainer | undefined>(undefined)
  readonly courseName$ = new BehaviorSubject<string | undefined>(undefined)

  constructor(
    private http: HttpClient,
    private ui: DialogService,
    private chooseDependencyService: ChooseDependencyService,
    private router: Router
  ) {}

  update() {
    this.getContainer()
      .pipe(
        tap((container) => {
          console.log('container we got in container-detail: ', container)
          this.container$.next(container)
        }),
        catchError((err) => {
          this.ui.showToast('LernElement konnte nicht geladen werden')
          this.container$.error(err)
          return err
        })
      )
      .subscribe()
  }

  removeDependency() {
    const forContainer = this.container$.getValue()
    if (!forContainer) return
    this.putDependency(forContainer._id, 0)
      .pipe(
        tap(() => this.update()),
        catchError((err) => {
          this.ui.showToast(`Abhängigkeit konnte nicht entfernt werden`)

          return err
        })
      )
      .subscribe()
  }

  deleteContainer() {
    const container = this.container$.getValue()
    if (!container) return
    return this._deleteContainer(container._id).pipe()
  }

  addDependency() {
    const courseId = this.courseId$.getValue()
    const forName = this.containerName$.getValue()
    const forContainer = this.container$.getValue()
    if (!courseId || !forName || !forContainer) return
    this.chooseDependencyService
      .chooseDependency(courseId, forName, forContainer)
      .pipe(
        filterNullish(),
        filter((dependency) => dependency != 'noChange'),
        mergeMap((dependency) =>
          this.putDependency(forContainer._id, (dependency as IRef)._id)
        ),
        tap(() => this.update()),
        catchError((err) => {
          this.ui.showToast(`Abhängigkeit konnte nicht hinzugefügt werden`)

          return err
        })
      )
      .subscribe()
  }

  private _deleteContainer(id: number) {
    return this.http.delete(`${environment.baseUrl}/container/${id}`)
  }

  private putDependency(forContainerId: number, dependentContainerId: number) {
    return this.http.put(`${environment.baseUrl}/container/${forContainerId}`, {
      dependent: dependentContainerId,
    })
  }

  private getContainer(): Observable<IContainer> {
    return this.containerId$.pipe(
      filterNullish(),
      mergeMap((id) =>
        this.http.get<IContainer>(`${environment.baseUrl}/container/${id}`)
      )
    )
  }
}
