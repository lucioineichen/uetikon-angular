import { Injectable } from '@angular/core'
import { UfkService } from '../../../ufk/ufk.service'
import { HttpClient, HttpParams } from '@angular/common/http'
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class StudentControlService {
  studentControl = this.service.studentControl
  students$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )

  constructor(
    private service: UfkService,
    private http: HttpClient,
    private ui: DialogService
  ) {}

  update() {
    this.getStudents()
      .pipe(
        tap((students) => {
          console.info(students)
          this.students$.next(students)
        }),
        catchError((err) => {
          this.ui.showToast('Klassen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private getStudents(): Observable<{ _id: number; name: string }[]> {
    return this.service.classes$.pipe(
      filterNullish(),
      map((classes) => classes.map((c) => c._id)),
      mergeMap((classes) => this.getStudentsFromClasses(classes))
    )
  }

  private getStudentsFromClasses(ids: number[]) {
    let params = new HttpParams()
    ids.forEach((id) => (params = params.append('class_ids', id)))
    params = params.set('format', 'ref')

    return this.http.get<{ _id: number; name: string }[]>(
      `${environment.baseUrl}/students`,
      {
        params,
      }
    )
  }
}
