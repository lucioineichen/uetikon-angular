import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { IName } from 'src/app/user/user'

export interface ITeacher {
  _id: number
  email: string
  name: IName
  permissions: { id: number; name: string; read: boolean; write: boolean }[]
  picture?: string
}

export class Teacher {
  constructor(
    public _id = 0,
    public email = '--',
    public name: IName = { firstName: '--', lastName: '--' },
    public permissions: {
      id: number
      name: string
      read: boolean
      write: boolean
    }[] = [],
    public picture?: string
  ) {}

  static Build(teacher: ITeacher) {
    if (!teacher) {
      return new Teacher()
    }

    return new Teacher(
      teacher._id,
      teacher.email,
      teacher.name,
      teacher.permissions,
      teacher.picture
    )
  }
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  readonly teacher$ = new BehaviorSubject<ITeacher | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getTeacher(id: number) {
    return this.httpClient.get<ITeacher>(
      `${environment.baseUrl}/administrator/teachers/${id}`
    )
  }

  updateTeacher(id: number) {
    this.getTeacher(id)
      .pipe(
        map(Teacher.Build),
        tap((teacher) => {
          this.teacher$.next(teacher)
          console.log(teacher)
        }),
        catchError((err) => {
          this.teacher$.error(err)
          this.uiService.showToast('Lehrer konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  deleteTeacher() {
    if (!this.teacher$.value) return
    return this.httpClient.delete<ITeacher>(
      `${environment.baseUrl}/administrator/teachers/${this.teacher$.value._id}`
    )
  }

  editTeacherPermissions(data: any) {
    if (!this.teacher$.value) return
    return this.httpClient.put<ITeacher>(
      `${environment.baseUrl}/administrator/teachers/${this.teacher$.value._id}`,
      data
    )
  }
}
