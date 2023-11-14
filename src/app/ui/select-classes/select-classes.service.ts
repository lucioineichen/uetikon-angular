import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IClass } from 'src/app/administrator/students/student/student.service'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class SelectClassesService {
  readonly classes$ = new BehaviorSubject<IClass[] | undefined>(undefined)

  constructor(private httpClient: HttpClient, private uiService: UiService) {}

  private getClasses() {
    return this.httpClient.get<IClass[]>(
      `${environment.baseUrl}/administrator/classes`
    )
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
