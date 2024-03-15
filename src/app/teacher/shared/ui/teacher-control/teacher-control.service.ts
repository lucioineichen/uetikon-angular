import { Injectable } from '@angular/core'
import { UfkService } from '../../../ufk/ufk.service'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class TeacherControlService {
  teachers$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )
  teacherControl = this.service.teacherControl

  constructor(
    private service: UfkService,
    private ui: DialogService,
    private http: HttpClient
  ) {}

  update() {
    this.getTeachers()
      .pipe(
        tap((teachers) => this.teachers$.next(teachers)),
        catchError((err) => {
          this.ui.showToast('Lehrer konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private getTeachers(): Observable<{ _id: number; name: string }[]> {
    return this.http.get<{ _id: number; name: string }[]>(
      `${environment.baseUrl}/teacher/teachers`
    )
  }
}
