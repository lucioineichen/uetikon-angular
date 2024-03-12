import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, filter, map, mergeMap, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IStudent, Student } from 'src/app/shared/utils/interfaces'
import { StudentFormComponent } from './student-form/student-form.component'
import { ClassFormComponent } from './class-form/class-form.component'
import { IClass } from './student/student.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  readonly students$ = new BehaviorSubject<IStudent[] | undefined>(undefined)
  readonly classes$ = new BehaviorSubject<IClass[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService,
    private dialog: MatDialog
  ) {}

  private getStudents() {
    return this.httpClient.get<IStudent[]>(
      `${environment.baseUrl}/administrator/students`
    )
  }

  private getClasses() {
    return this.httpClient.get<IClass[]>(
      `${environment.baseUrl}/administrator/classes`
    )
  }

  update() {
    this.getStudents()
      .pipe(
        map((student) => {
          return student.map(Student.Build)
        }),
        tap((students) => this.students$.next(students)),
        catchError((err) => {
          this.students$.error(err)
          this.uiService.showToast('Schüler konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()

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

  postStudent(data: any) {
    return this.httpClient.post<IStudent>(
      `${environment.baseUrl}/administrator/students`,
      data
    )
  }

  addStudent() {
    const dialogRef = this.dialog.open(StudentFormComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => value != '' && value != undefined),
        mergeMap((value) => {
          return this.postStudent(value)
        }),
        map(Student.Build),
        tap((student) => {
          this.students$.next(this.students$.value?.concat(student))
          this.uiService.showToast('Erfolgreich Schüler erstellt')
        }),
        catchError((err) => {
          this.uiService.showToast('Schüler konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  postClass(data: any) {
    return this.httpClient.post<IClass>(
      `${environment.baseUrl}/administrator/classes`,
      data
    )
  }

  addClass() {
    const dialogRef = this.dialog.open(ClassFormComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => value != '' && value != undefined),
        mergeMap((value) => {
          return this.postClass(value)
        }),
        tap((_class) => {
          this.classes$.value?.push(_class)
          this.uiService.showToast('Erfolgreich Klasse erstellt')
        }),
        catchError((err) => {
          this.uiService.showToast('Klasse konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }
}
