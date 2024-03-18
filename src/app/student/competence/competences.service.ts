import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  readonly data$ = new BehaviorSubject<any | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService
  ) {}

  private getData() {
    return this.httpClient.get<any>(
      `${environment.baseUrl}/student/competences`
    )
  }

  update() {
    this.getData()
      .pipe(
        tap((data) => this.data$.next(data)),
        catchError((err) => {
          this.data$.error(err)
          this.uiService.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
