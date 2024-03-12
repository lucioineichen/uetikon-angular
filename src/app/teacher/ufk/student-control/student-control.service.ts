import { Injectable } from '@angular/core'
import { UfkService } from '../ufk.service'
import { HttpClient } from '@angular/common/http'
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
    return this.http.put<{ _id: number; name: string }[]>(
      `${environment.baseUrl}/teacher/classes/students`,
      {
        ids,
      }
    )
  }
}
