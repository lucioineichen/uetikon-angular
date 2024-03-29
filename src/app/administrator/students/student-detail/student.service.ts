import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IName } from 'src/app/core/auth/user'
import { environment } from 'src/app/core/environment/environment.demo'

export interface IClass {
  _id: number
  name: string
  studentCount: number
  grade: number
}

export interface IStudent {
  _id: number
  email: string
  name: IName
  grade: number
  classes: IClass[]
  picture?: string
  readonly fullName: string
}

export class Student implements IStudent {
  get fullName() {
    return `${this.name.firstName} ${this.name.middleName || ''} ${
      this.name.lastName
    }`
  }

  constructor(
    public _id: number,
    public email: string,
    public name: IName,
    public grade: number,
    public classes: IClass[],
    public picture?: string
  ) {}

  static Build(data: IStudent) {
    return new Student(
      data._id,
      data.email,
      data.name,
      data.grade,
      data.classes,
      data.picture
    )
  }
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  readonly student$ = new BehaviorSubject<IStudent | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: DialogService
  ) {}

  private getStudent(id: number) {
    return this.httpClient.get<IStudent>(
      `${environment.baseUrl}/students/${id}`
    )
  }

  updateStudent(id: number) {
    this.getStudent(id)
      .pipe(
        map(Student.Build),
        tap((teacher) => {
          this.student$.next(teacher)
        }),
        catchError((err) => {
          this.student$.error(err)
          this.uiService.showToast('schüler konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  deleteStudent() {
    if (!this.student$.value) return
    return this.httpClient.delete<IStudent>(
      `${environment.baseUrl}/students/${this.student$.value._id}`
    )
  }

  putStudent(data: any) {
    if (!this.student$.value) return
    return this.httpClient.put<IStudent>(
      `${environment.baseUrl}/students/${this.student$.value._id}`,
      data
    )
  }

  saveStudent(data: any) {
    this.putStudent(data)
      ?.pipe(
        map(Student.Build),
        tap((student) => {
          this.uiService.showToast('Schüler erfolgreich bearbeitet')
          this.student$.next(student)
        }),
        tap(console.info),
        catchError((err) => {
          this.uiService.showToast('Schüler konnte nicht bearbeitet werden')
          return err
        })
      )
      .subscribe()
  }
}
