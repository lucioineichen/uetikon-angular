import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, filter, map, mergeMap, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { ITeacher, Teacher } from 'src/app/interfaces'
import { TeacherFormComponent } from './teacher-form/teacher-form.component'

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  readonly teachers$ = new BehaviorSubject<ITeacher[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getTeachers() {
    return this.httpClient.get<ITeacher[]>(
      `${environment.baseUrl}/administrator/teachers`
    )
  }

  updateTeachers() {
    this.getTeachers()
      .pipe(
        map((teachers) => {
          return teachers.map(Teacher.Build)
        }),
        tap((teachers) => this.teachers$.next(teachers)),
        catchError((err) => {
          this.teachers$.error(err)
          this.uiService.showToast('Lehrer konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  postTeacher(data: any) {
    return this.httpClient.post<ITeacher>(
      `${environment.baseUrl}/administrator/teachers`,
      data
    )
  }

  addTeacher() {
    const dialogRef = this.dialog.open(TeacherFormComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => value != ''),
        mergeMap((value) => {
          return this.postTeacher(value)
        }),
        tap((teacher) => {
          this.teachers$.value?.push(teacher)
          this.uiService.showToast('Erfolgreich Lehrer erstellt'),
            catchError((err) => {
              this.uiService.showToast('Lehrer konnte nicht erstellt werden')
              return err
            })
        })
      )
      .subscribe()
  }
}
