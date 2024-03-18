import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { IPermission } from 'src/app/core/auth/auth.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IName, Name } from 'src/app/core/auth/user'
import { environment } from 'src/app/core/environment/environment.demo'

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
    public name: IName = Name.Build({ firstName: '--', lastName: '--' }),
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
    private uiService: DialogService,
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

  putTeacherPermissions(data: any) {
    if (!this.teacher$.value) return
    return this.httpClient.put<ITeacher>(
      `${environment.baseUrl}/administrator/teachers/${this.teacher$.value._id}`,
      data
    )
  }

  putTeacherUser(data: any) {
    console.log(data)
    if (!this.teacher$.value) return
    return this.httpClient.put<ITeacher>(
      `${environment.baseUrl}/administrator/teachers/${this.teacher$.value._id}`,
      data
    )
  }

  editTeacherUser(data: any, permissions: IPermission[]) {
    const permission_changes = permissions.map((permission) => {
      return {
        restriction_id: permission.id,
        is_restriction: !permission.read || !permission.write,
        read: permission.read,
      }
    })

    this.putTeacherUser(
      Object.assign(data, { permission_changes: permission_changes })
    )
      ?.pipe(
        map(Teacher.Build),
        tap((teacher) => this.teacher$.next(teacher)),
        catchError((err) => {
          this.uiService.showToast('Lehrer konnten nicht bearbeitet werden')
          return err
        })
      )
      .subscribe()
  }
}
