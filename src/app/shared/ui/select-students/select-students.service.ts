import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DialogService } from '../dialogs/ui.service'
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  tap,
} from 'rxjs'
import { IStudent, Student } from 'src/app/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { SelectStudentsComponent } from './select-students.component'
import { FormControl } from '@angular/forms'
import { filterNullish } from '../../utils/filternullish'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class SelectStudentsService {
  students$ = new BehaviorSubject<IStudent[] | undefined>(undefined)
  selected$ = new BehaviorSubject<number[]>([])
  filtered$ = new BehaviorSubject<IStudent[] | undefined>(undefined)
  search = new FormControl<string>('')

  constructor(
    private http: HttpClient,
    private ui: DialogService,
    private dialog: MatDialog
  ) {
    combineLatest([
      this.students$.pipe(filterNullish()),
      this.search.valueChanges.pipe(
        startWith(''),
        distinctUntilChanged(),
        filterNullish()
      ),
    ])
      .pipe(
        map(this.filterStudents),
        tap((filtered) => this.filtered$.next(filtered))
      )
      .subscribe()
  }

  private getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${environment.baseUrl}/students`)
  }

  update() {
    this.getStudents()
      .pipe(
        map((students) => students.map(Student.Build)),
        tap((students) => this.students$.next(students)),
        catchError((err) => {
          this.ui.showToast('Schüler konnten nicht geladen werden')
          this.students$.error(new Error('server 500'))
          return err
        })
      )
      .subscribe()
  }

  selectStudents(selected?: number[]): Observable<IStudent[] | undefined> {
    if (selected) this.selected$.next([...selected])
    else this.selected$.next([])

    this.update()

    const dialogRef = this.dialog.open(SelectStudentsComponent)

    return dialogRef.afterClosed().pipe(
      map((isConfirmed) => {
        let students = this.students$.value as IStudent[]
        if (students && isConfirmed)
          return this.selected$.value.map(
            (id) => students.find((student) => student._id == id) as IStudent
          )
        return undefined
      })
    )
  }

  private filterStudents([students, search]: [IStudent[], string]): IStudent[] {
    return students.filter((student) =>
      student.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }
}
