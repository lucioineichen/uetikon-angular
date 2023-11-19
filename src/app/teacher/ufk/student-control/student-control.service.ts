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
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { filterNullish } from 'src/app/common/common'

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
    private ui: UiService
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
