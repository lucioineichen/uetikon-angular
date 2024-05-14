import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, tap } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Injectable({
  providedIn: 'root',
})
export class ChoiceContainerService {
  constructor(private http: HttpClient, private ui: DialogService) {}

  putJobList(id: number, list: number[]) {
    this.http
      .put(`${environment.baseUrl}/container/${id}`, {
        jobChoiceList: list,
      })
      .pipe(
        tap(() => this.ui.showToast('Auswahl Erfolgreich Bearbeitet')),
        catchError((err) => {
          this.ui.showToast('Auswahl konnte nicht bearbeitet werden')
          return err
        })
      )
      .subscribe()
  }
}
