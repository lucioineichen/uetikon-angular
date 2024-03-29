import { Injectable } from '@angular/core'
import { UfkService } from '../../../ufk/ufk.service'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ClassControlService {
  classControl = this.service.classControl
  classes$: BehaviorSubject<{ _id: number; name: string }[] | undefined> =
    this.service.classes$

  constructor(
    private service: UfkService,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  update() {
    this.getClasses()
      .pipe(
        tap((data) => {
          console.info(data)
          this.classControl.setValue(data.primary._id)
          this.classes$.next(data.classes)
        }),
        catchError((err) => {
          this.ui.showToast('Klassen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private getClasses() {
    let params = new HttpParams().set('format', 'primary')
    return this.http.get<{
      primary: { _id: number; name: string }
      classes: { _id: number; name: string }[]
    }>(`${environment.baseUrl}/classes`, { params })
  }
}
