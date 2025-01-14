import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IClass } from '../../utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class SelectClassesService {
  readonly classes$ = new BehaviorSubject<IClass[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService
  ) {}

  private getClasses() {
    return this.httpClient.get<IClass[]>(`${environment.baseUrl}/classes`)
  }

  update() {
    this.getClasses()
      .pipe(
        tap((classes) => this.classes$.next(classes)),
        catchError((err) => {
          this.classes$.error(err)
          this.uiService.showToast('Klassen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
